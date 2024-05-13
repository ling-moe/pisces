import { FeatureService } from './Feature-service';
import type { BlockSpec } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import { FeatureBlockModel, FeatureBlockSchema } from './feature-model';
import { FeatureBlockComponent } from './feature-block';

export const FeatureBlockSpec: BlockSpec = {
  schema: FeatureBlockSchema,
  view: {
    component: literal`affine-feature`,
  },
  service: FeatureService,
};

declare global {
  namespace BlockSuite {
    interface BlockServices {
      'affine:feature': FeatureService;
    }
    interface BlockModels {
      'affine:feature': FeatureBlockModel;
    }
  }
  interface HTMLElementTagNameMap {
    'affine-feature': FeatureBlockComponent;
  }
}
export { FeatureBlockComponent, FeatureService, FeatureBlockModel };

