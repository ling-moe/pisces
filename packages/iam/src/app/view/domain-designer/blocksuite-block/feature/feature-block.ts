import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FeatureService } from './Feature-service';
import { FeatureBlockModel } from './feature-model';
import { BlockElement } from '@blocksuite/block-std';
import { EdgelessRootBlockComponent, NoteBlockComponent } from '@blocksuite/blocks';
import { bindContainerHotkey } from '@blocksuite/blocks/dist/_common/components/rich-text/keymap/container';

@customElement('affine-feature')
export class FeatureBlockComponent extends BlockElement<FeatureBlockModel, FeatureService> {

  static override styles = css`
    affine-database {
      display: block;
      border-radius: 8px;
      background-color: var(--affine-background-primary-color);
      padding: 8px;
      margin: 8px -8px -8px;
    }
  `;

  override get topContenteditableElement() {
    if (this.rootElement instanceof EdgelessRootBlockComponent) {
      const note = this.closest<NoteBlockComponent>('affine-note');
      return note;
    }
    return this.rootElement;
  }

  override connectedCallback() {
    super.connectedCallback();
    bindContainerHotkey(this);

    // 初始化结构
    const currentId = this.path[this.path.length - 1];
    if(this.model.children.length !== 0){
      return;
    }
    this.doc.addBlock('affine:feature-content',
      { title: '故事', text: this.model.story }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '行为', text: this.model.action }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '命令', text: this.model.command }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '事件', text: this.model.event }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '用例', text: this.model.case }, currentId);
  }

  override renderBlock() {
    return html`
      <div contenteditable="false" style="position: relative">
      ${this.renderChildren(this.model)}
      </div>
    `;
  }
}
