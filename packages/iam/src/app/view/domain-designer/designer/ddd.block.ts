import { BlockModel, Text } from "@blocksuite/store";
import { defineEmbedModel, createEmbedBlock, AffineTextAttributes, ReferenceNodeConfig, InlineManager, getAffineInlineSpecsWithReference, EmbedBlockElement } from '@blocksuite/blocks';
import { literal } from 'lit/static-html.js';
import { html, nothing, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BlockService } from '@blocksuite/block-std';
import { affineInlineMarkdownMatches } from '@blocksuite/blocks/dist/_common/inline/presets/markdown';
import { InlineRangeProvider } from "@blocksuite/inline";
import { assertExists } from '@blocksuite/global/utils';

export class FeatureModel extends defineEmbedModel<{
  bizFlow: Text;
  command: Text;
  event: Text;
  bizRole: Text;
}>(BlockModel) { }

@customElement('pisces-feature')
export class EmbedGithubBlock extends EmbedBlockElement<FeatureModel,FeatureService> {

  static override styles =css`
  .feature-title {
    border-left: 5px solid #42b983;
    padding-left: 10px;
    margin-bottom: 20px;
    background-color: #f3f5f7;
    font-weight: bold;
  }
  `;

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

  override render() {
    return this.renderEmbed(() => {
      return html`
        <div>
        <h3 class="biz-flow-title">业务流</h3>
          <rich-text
          .yText=${this.model.bizFlow?.yText}
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
        </rich-text>
          <h3 class="feature-title">事件</h3>
          <rich-text
          .yText=${this.model.event?.yText}
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
          <h3 class="feature-title">命令</h3>
          <rich-text
          .yText=${this.model.command?.yText}
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
          <h3 class="feature-title">角色</h3>
          <rich-text
          .yText=${this.model.bizRole.yText}
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
        <br><br>
        </div>
      `;
    });
  }
}


export class FeatureService<
  TextAttributes extends AffineTextAttributes = AffineTextAttributes,
> extends BlockService<FeatureModel> {
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

export const EmbedFeatureBlockSpec = createEmbedBlock({
  schema: {
    name: 'feature',
    version: 1,
    toModel: () => new FeatureModel(),
    props: () => ({
      bizFlow: new Text(),
      command: new Text(),
      event: new Text(),
      bizRole: new Text()
    }),
  },
  service: FeatureService,
  view: {
    component: literal`pisces-feature`,
  },
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace BlockSuite {
    interface BlockModels {
      'affine:embed-feature': FeatureModel;
    }
  }
}
