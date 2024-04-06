import { NoteBlockModel, NoteService } from '@blocksuite/blocks';
import { KeymapController } from '@blocksuite/blocks/dist/note-block/keymap-controller';
import { BlockElement } from '@blocksuite/lit';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('pisces-note')
export class NoteBlockComponent extends BlockElement<
  NoteBlockModel,
  NoteService
> {
  static override styles = css`
    .affine-note-block-container {
      display: flow-root;
    }
    .affine-note-block-container.selected {
      background-color: var(--affine-hover-color);
    }
  `;

  keymapController = new KeymapController(this);

  override connectedCallback() {
    super.connectedCallback();

    this.keymapController.bind();
  }

  override renderBlock() {
    return html`
    <h2>业务流</h2>
      <div class="affine-note-block-container">
        <div class="affine-block-children-container">
        ${this.renderChildren(this.model)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'affine-note': NoteBlockComponent;
  }
}
