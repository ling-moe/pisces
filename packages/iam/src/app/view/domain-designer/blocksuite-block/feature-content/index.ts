import { FeatureContentService } from './feature-content-service';
import type { BlockSpec } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import { FeatureContentBlockModel, FeatureContentBlockSchema } from './feature-content-model';
import { FeatureContentBlockComponent } from './feature-content-block';

export const FeatureContentSpec: BlockSpec = {
  schema: FeatureContentBlockSchema,
  view: {
    component: literal`affine-feature-content`,
  },
  service: FeatureContentService,
};

declare global {
  namespace BlockSuite {
    interface BlockServices {
      'affine:feature-content': FeatureContentService;
    }
    interface BlockModels {
      'affine:feature-content': FeatureContentBlockModel;
    }
  }
  interface HTMLElementTagNameMap {
    'affine-feature-content': FeatureContentBlockComponent;
  }
}
export { FeatureContentBlockComponent, FeatureContentBlockModel, FeatureContentService };

