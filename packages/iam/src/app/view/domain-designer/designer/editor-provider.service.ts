import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AffineEditorContainer } from '@blocksuite/presets';
import { Doc,Schema,Text,DocCollection } from '@blocksuite/store';
import { CustomBlockSpecs } from './specs';
import { IndexeddbPersistence } from 'y-indexeddb';
import { CustomSchemas } from './schemas';
import { NoteBlockComponent } from './pisces-note';

@Injectable({
  providedIn: 'root',
})
export class EditorProviderService {
  private editor: AffineEditorContainer;
  private workspace: DocCollection;
  private docUpdatedSubject = new BehaviorSubject<Doc[]>([]);
  docUpdated$ = this.docUpdatedSubject.asObservable();

  props = {
    bizFlow: new Text('分解调度任务'),
    command: new Text('从合同产品分解调度任务'),
    event: new Text('调度任务已创建'),
    bizRole: new Text('企业角色')
  };
  featureBlock!:any;

  constructor() {
    const schema = new Schema().register(CustomSchemas);
    this.workspace = new DocCollection({ schema });
    const doc = this.workspace.createDoc({ id: 'page1' });
    // TODO 暂时的持久化
    // new IndexeddbPersistence('provider-demo', doc.spaceDoc);
    NoteBlockComponent
    doc.load(() => {
      const pageBlockId = doc.addBlock('affine:page', {});
      doc.addBlock('affine:surface', {}, pageBlockId);
      const noteId = doc.addBlock('affine:note', {}, pageBlockId);
      const featureId = doc.addBlock('affine:embed-feature', this.props, noteId);
      this.featureBlock = doc.getBlockById(featureId);
    });


    this.editor = new AffineEditorContainer();
    this.editor.pageSpecs = CustomBlockSpecs;

    this.editor.doc = doc;
    this.editor.slots.docLinkClicked.on(({ docId }) => {
      const target = <Doc>this.workspace.getDoc(docId);
      this.editor.doc = target;
    });

    // this.workspace.slots.docUpdated.on(() => this.updateDocs());
    this.editor.slots.docLinkClicked.on(() => this.updateDocs());
  }

  private updateDocs() {
    const docs = [...this.workspace.docs.values()];
    this.docUpdatedSubject.next(docs);
  }

  getEditor() {
    return this.editor;
  }

  getWorkspace() {
    return this.workspace;
  }
}
