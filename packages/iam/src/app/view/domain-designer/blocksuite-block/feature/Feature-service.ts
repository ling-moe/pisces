import { BlockService } from '@blocksuite/block-std';
import { AffineTextAttributes, InlineManager, ReferenceNodeConfig, getAffineInlineSpecsWithReference } from '@blocksuite/blocks';
import { affineInlineMarkdownMatches } from '@blocksuite/blocks/dist/_common/inline/presets/markdown.js';
import { FeatureBlockModel } from './feature-model';

export class FeatureService<
  TextAttributes extends AffineTextAttributes = AffineTextAttributes,
> extends BlockService<FeatureBlockModel> {
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
