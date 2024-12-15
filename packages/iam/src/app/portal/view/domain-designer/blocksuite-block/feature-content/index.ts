import { BlockSpec } from "@blocksuite/block-std";
import { FeatureContentBlockComponent } from "./feature-content-block";
import { FeatureContentBlockSchema, FeatureContentBlockModel } from "./feature-content-model";
import { FeatureContentService } from "./feature-content-service";
import { literal } from 'lit/static-html.js';

export const FeatureContentSpec: BlockSpec = {
  schema: FeatureContentBlockSchema,
  view: {
    component: literal`affine-feature-content`,
  },
  service: FeatureContentService,
};

export { FeatureContentBlockComponent, FeatureContentBlockModel, FeatureContentService };

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


