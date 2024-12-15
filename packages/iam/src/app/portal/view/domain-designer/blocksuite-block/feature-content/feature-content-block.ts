import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FeatureContentBlockModel } from './feature-content-model';
import { FeatureContentService } from './feature-content-service';
import { BlockElement } from '@blocksuite/block-std';
import { EdgelessRootBlockComponent, NoteBlockComponent } from '@blocksuite/blocks';

@customElement('affine-feature-content')
export class FeatureContentBlockComponent extends BlockElement<FeatureContentBlockModel, FeatureContentService> {
  static override styles = css`
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

    const currentId = this.path[this.path.length - 1];
    if(this.model.children.length !== 0){
      return;
    }
    this.doc.addBlock(this.model.contentFlavour, { text: this.model.text }, currentId);

  }

  override renderBlock() {
    return html`
    <h3>${this.model.title}</h3>
    ${this.renderChildren(this.model)}
    `;
  }
}
