import { BlockElement } from '@blocksuite/block-std';
import { EdgelessRootBlockComponent, NoteBlockComponent } from '@blocksuite/blocks';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Subject, takeUntil } from 'rxjs';
import { FeatureService } from './Feature-service';
import { FeatureBlockModel } from './feature-model';

@customElement('affine-feature')
export class FeatureBlockComponent extends BlockElement<FeatureBlockModel, FeatureService> {

  @property()
  fields: string[] = [];

  private destory = new Subject<boolean>();

  override get topContenteditableElement() {
    if (this.rootElement instanceof EdgelessRootBlockComponent) {
      const note = this.closest<NoteBlockComponent>('affine-note');
      return note;
    }
    return this.rootElement;
  }

  override connectedCallback() {
    super.connectedCallback();

    // 订阅field
    this.service.fieldsOb
    .pipe(takeUntil(this.destory))
    .subscribe(fields => this.fields = fields);

    const currentId = this.path[this.path.length - 1];
    // 初始化结构

    if (this.model.children.length !== 0) {
      return;
    }
    this.doc.addBlock('affine:feature-content',
      { title: '故事', text: this.model.story }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '行为', text: this.model.action }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '命令', text: this.model.command}, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '事件', text: this.model.event }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '用例', text: this.model.case }, currentId);
  }

  override disconnectedCallback(): void {
    this.destory.next(true);
    this.destory.complete();
  }

  renderFields() {
    return html`
    <div>
    <span>字段: </span>
    ${this.fields.map(field => html`
    <span class="bg-blue-100 r-4 p-4">${field}</span>
    `)}
    </div>
    `;
  }

  override renderBlock() {
    // FIXME 修复fields不展示的问题
    return html`
      <div contenteditable="false" class="mat-elevation-z3 p-x-16 p-y-8 m-y-16 r-4">
      ${this.renderFields()}
      ${this.renderChildren(this.model)}
      </div>
    `;
  }
}
