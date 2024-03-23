import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AffineSchemas, PageEditorBlockSpecs } from '@blocksuite/blocks';
import { AffineEditorContainer } from '@blocksuite/presets';
import { EmbedGithubBlockSpec } from "./ddd.block";
import { Doc,Schema,Text,DocCollection } from '@blocksuite/store';

@Injectable({
  providedIn: 'root',
})
export class EditorProviderService {
  private editor: AffineEditorContainer;
  private workspace: DocCollection;
  private docUpdatedSubject = new BehaviorSubject<Doc[]>([]);
  docUpdated$ = this.docUpdatedSubject.asObservable();

  constructor() {
    const schema = new Schema().register(AffineSchemas).register([EmbedGithubBlockSpec.schema]);
    this.workspace = new DocCollection({ schema });
    const doc = this.workspace.createDoc({ id: 'page1' });

    doc.load(() => {
      const pageBlockId = doc.addBlock('affine:page', {});
      doc.addBlock('affine:surface', {}, pageBlockId);
      const noteId = doc.addBlock('affine:note', {}, pageBlockId);
      const props = {
        bizFlow: new Text('分解调度任务'),
        command: new Text('从合同产品分解调度任务'),
        event: new Text('调度任务已创建'),
        bizRole: new Text('企业角色')
      };

      doc.addBlock('affine:embed-feature', props, noteId);
    });


    this.editor = new AffineEditorContainer();
    this.editor.pageSpecs = [...PageEditorBlockSpecs, EmbedGithubBlockSpec];

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
