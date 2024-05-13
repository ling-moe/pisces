import { EdgelessRootBlockComponent, NoteBlockComponent } from '@blocksuite/blocks';
import { bindContainerHotkey } from '@blocksuite/blocks/dist/_common/components/rich-text/keymap/index.js';
import { BlockElement } from '@blocksuite/lit';
import { BlockModel } from '@blocksuite/store';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { FeatureService } from './Feature-service';
import { FeatureBlockModel } from './feature-model';

@customElement('affine-feature')
export class FeatureBlockComponent extends BlockElement<FeatureBlockModel, FeatureService> {

  private storyBlockModel!: BlockModel;
  private actionBlockModel!: BlockModel;
  private commandBlockModel!: BlockModel;
  private eventBlockModel!: BlockModel;
  private caseBlockModel!: BlockModel;
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
    this.storyBlockModel = this.doc.getBlockById(this.doc.addBlock('affine:feature-content', { title: '故事', text: this.model.story }, currentId))!;
    this.actionBlockModel = this.doc.getBlockById(this.doc.addBlock('affine:feature-content', { title: '行为',text: this.model.action }, currentId))!;
    this.commandBlockModel = this.doc.getBlockById(this.doc.addBlock('affine:feature-content', { title: '命令',text: this.model.command }, currentId))!;
    this.eventBlockModel = this.doc.getBlockById(this.doc.addBlock('affine:feature-content', { title: '事件',text: this.model.event }, currentId))!;
    this.caseBlockModel = this.doc.getBlockById(this.doc.addBlock('affine:feature-content', { title: '用例',text: this.model.case }, currentId))!;
  }

  override renderBlock() {
    return html`
      <div contenteditable="false" style="position: relative">
      ${this.renderChildren(this.model)}
      </div>
    `;
  }
}
