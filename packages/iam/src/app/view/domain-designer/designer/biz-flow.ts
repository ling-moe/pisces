import { BlockElement } from '@blocksuite/lit';
import { BlockModel, Doc, Text, defineBlockSchema } from "@blocksuite/store";
import { AffineTextAttributes, ReferenceNodeConfig, InlineManager, getAffineInlineSpecsWithReference } from '@blocksuite/blocks';
import { literal } from 'lit/static-html.js';
import { html, nothing, css } from 'lit';
import { customElement,property } from 'lit/decorators.js';
import { BlockService } from '@blocksuite/block-std';
import { affineInlineMarkdownMatches } from '@blocksuite/blocks/dist/_common/inline/presets/markdown';
import { InlineRangeProvider } from "@blocksuite/inline";
import { assertExists } from '@blocksuite/global/utils';

export class BizFlowModel extends BlockModel<{
  text: Text;
}> { }

@customElement('pisces-feature-biz-flow')
export class BizFlowBlock extends BlockElement<BizFlowModel,BizFlowService> {

  static override styles =css`
  .biz-flow-title {
    border-left: 5px solid #42b983;
    padding-left: 10px;
    margin-bottom: 20px;
    background-color: #f3f5f7;
    font-weight: bold;
  }
  `;

  @property({ attribute: false })
  loading = false;

  get inlineManager() {
    const inlineManager = this.service?.inlineManager;
    assertExists(inlineManager);
    return inlineManager;
  }
  get attributesSchema() {
    return this.inlineManager.getSchema();
  }
  get attributeRenderer() {
    return this.inlineManager.getRenderer();
  }
  get markdownShortcutHandler() {
    return this.inlineManager.markdownShortcutHandler;
  }
  get embedChecker() {
    return this.inlineManager.embedChecker;
  }

  private _inlineRangeProvider: InlineRangeProvider | null = null;

  override renderBlock() {
    return html`
        <div>
        <h3 class="biz-flow-title">业务流</h3>
          <rich-text
          .yText=${this.model.text?.yText}
          .inlineEventSource=${this.topContenteditableElement ?? nothing}
          .undoManager=${this.doc.history}
          .attributesSchema=${this.attributesSchema}
          .attributeRenderer=${this.attributeRenderer}
          .markdownShortcutHandler=${this.markdownShortcutHandler}
          .embedChecker=${this.embedChecker}
          .readonly=${this.doc.readonly}
          .inlineRangeProvider=${this._inlineRangeProvider}
          .enableClipboard=${false}
          .enableUndoRedo=${false}
        ></rich-text>
        </div>
      `;
  }
}


export class BizFlowService<
  TextAttributes extends AffineTextAttributes = AffineTextAttributes,
> extends BlockService<BizFlowModel> {
  readonly inlineManager = new InlineManager<TextAttributes>();
  readonly referenceNodeConfig = new ReferenceNodeConfig();

  override mounted(): void {
    super.mounted();

    this.referenceNodeConfig.setDoc(this.doc);

    const inlineSpecs = getAffineInlineSpecsWithReference(
      this.referenceNodeConfig
    );
    this.inlineManager.registerSpecs(inlineSpecs);
    this.inlineManager.registerMarkdownMatches(affineInlineMarkdownMatches);
  }
}

export const BizFlowBlockSchema = defineBlockSchema({
  flavour: `affine:note-block-biz-flow`,
  props: internalPrimitives => {
    return {
      // index: 'a0',
      // xywh: '[0,0,0,0]',
      // rotate: 0,
      text: internalPrimitives.Text(),
    };
  },
  metadata: {
    version: 1,
    role: 'content',
    parent: [
      'affine:note',
      'affine:database',
      'affine:paragraph',
      'affine:list',
    ],
  },
  toModel: () => new BizFlowModel(),
});

export const BizFlowBlockSpec = {
  schema: BizFlowBlockSchema,
  service: BizFlowService,
  view: {
    component: literal`pisces-feature-biz-flow`,
  },
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace BlockSuite {
    interface BlockModels {
      'affine:note-block-biz-flow': BizFlowModel;
    }
  }
}
