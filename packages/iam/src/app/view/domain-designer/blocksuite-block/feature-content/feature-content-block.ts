import { EdgelessRootBlockComponent, NoteBlockComponent } from '@blocksuite/blocks';
import { bindContainerHotkey } from '@blocksuite/blocks/dist/_common/components/rich-text/keymap/index.js';
import { BlockElement } from '@blocksuite/lit';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { FeatureContentBlockModel } from './feature-content-model';
import { FeatureContentService } from './feature-content-service';

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
    bindContainerHotkey(this);

    const currentId = this.path[this.path.length - 1];
    this.doc.getBlockById(this.doc.addBlock('affine:paragraph', { text: this.model.text }, currentId))!;

  }

  override renderBlock() {
    return html`
    <h3>${this.model.title}</h3>
    ${this.renderChildren(this.model)}
    `;
  }
}
