import { Injectable } from '@angular/core';
import { AffineEditorContainer } from '@blocksuite/presets';
import { Doc, DocCollection, nanoid, Schema } from '@blocksuite/store';
import { fromUint8Array, toUint8Array } from 'js-base64';
import { BehaviorSubject } from 'rxjs';
import { applyUpdate, encodeStateAsUpdate } from 'yjs';
import { CustomSchemas } from '../view/domain-designer/blocksuite-block/schemas';
import { CustomBlockSpecs, edgelessModeSpecs } from '../view/domain-designer/blocksuite-block/specs';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private collection!: DocCollection;
  private docUpdatedSubject = new BehaviorSubject<Doc[]>([]);
  docUpdated$ = this.docUpdatedSubject.asObservable();

  constructor(
  ) {
    const schema = new Schema().register(CustomSchemas);
    this.collection = new DocCollection({ schema });
  }


  createEditor(doc?: Doc | string) {
    const editor = new AffineEditorContainer();
    editor.pageSpecs = CustomBlockSpecs;
    editor.edgelessSpecs = edgelessModeSpecs;
    if (typeof doc === 'string') {
      editor.doc = this.string2Doc(doc);
    } else {
      editor.doc = doc ? doc : this.createDoc();
    }
    return editor;
  }
  private updateDocs() {
    const docs = [...this.collection.docs.values()];
    this.docUpdatedSubject.next(docs);
  }

  createDoc(docData?: Uint8Array) {
    const doc = this.collection.createDoc();
    doc.load(() => {
      if (docData) {
        applyUpdate(doc.spaceDoc, docData);
        return;
      }
      const pageBlockId = doc.addBlock('affine:page', {});
      doc.addBlock('affine:surface', {}, pageBlockId);
      const noteId = doc.addBlock('affine:note', {}, pageBlockId);
      doc.addBlock('affine:feature', {}, noteId);
    })
    return doc;
  }

  removeDoc(doc?: Doc) {
    if (!doc) {
      return;
    }
    this.collection.removeDoc(doc.id);
  }

  doc2String(doc: Doc) {
    return fromUint8Array(encodeStateAsUpdate(doc.spaceDoc));
  }

  string2Doc(base64Data: string) {
    return this.createDoc(toUint8Array(base64Data));
  }

  getCollection() {
    return this.collection;
  }

  //Y.encodeStateAsUpdate（全量），Y.encodeStateVector(状态向量差异)，存储在数据库要用byte
  // console.log(this.doc..toJSON());

}
