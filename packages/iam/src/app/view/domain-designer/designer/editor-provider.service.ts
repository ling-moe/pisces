import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Schema, Doc, DocCollection } from '@blocksuite/store';
import { AffineEditorContainer } from '@blocksuite/presets';
import { CustomSchemas } from '../blocksuite-block/schemas';
import { CustomBlockSpecs, edgelessModeSpecs } from '../blocksuite-block/specs';
import { RemoteService, Consumer } from '@pisces/musubi/client';
import { ProductDomainService } from '../../../domain/product.entity';
import { applyUpdate } from 'yjs';
import { toUint8Array } from 'js-base64';
// import * as Y from 'yjs'
// import * as idb from 'lib0/indexeddb'
// import * as promise from 'lib0/promise'
// import { Observable } from 'lib0/observable'

@Injectable({
  providedIn: 'root',
})
export class EditorProviderService {
  private editor!: AffineEditorContainer;
  private collection!: DocCollection;
  private docUpdatedSubject = new BehaviorSubject<Doc[]>([]);
  docUpdated$ = this.docUpdatedSubject.asObservable();

  constructor(
    @Inject(RemoteService)
    private productRepository: Consumer<ProductDomainService>,
  ) {

  }
  init() {
    const doc = this.getDoc();
    doc.addBlock('affine:feature', {}, doc.getBlockByFlavour("affine:note")[0].id);
  }

  private updateDocs() {
    const docs = [...this.collection.docs.values()];
    this.docUpdatedSubject.next(docs);
  }

  getEditor(productId: bigint) {
    return this.productRepository.detailProduct(productId).pipe(map(res => {
      const schema = new Schema().register(CustomSchemas);
      this.collection = new DocCollection({ schema });
      const doc = this.collection.createDoc({ id: 'page1' });

      this.editor = new AffineEditorContainer();
      this.editor.doc = doc;

      this.editor.pageSpecs = CustomBlockSpecs;
      this.editor.edgelessSpecs = edgelessModeSpecs;

      doc.load(() => {
        if (res?.base64Data) {
          applyUpdate(doc.spaceDoc, toUint8Array(res.base64Data!))
        }else{
          const pageBlockId = doc.addBlock('affine:page', {});
          doc.addBlock('affine:surface', {}, pageBlockId);
          const noteId = doc.addBlock('affine:note', {}, pageBlockId);
          doc.addBlock('affine:feature', {}, noteId);
        }
      });

      this.editor.slots.docLinkClicked.on(({ docId }) => {
        const target = <Doc>this.collection.getDoc(docId);
        this.editor.doc = target;
      });

      this.collection.slots.docUpdated.on(() => this.updateDocs());
      this.editor.slots.docLinkClicked.on(() => this.updateDocs());
      return this.editor;
    }));
  }

  getCollection() {
    return this.collection;
  }

  getDoc() {
    return this.collection.getDoc('page1')!;
  }
}
