import { BlockSpec } from "@blocksuite/block-std";
import { literal } from 'lit/static-html.js';
import { FeatureBlockComponent } from "./feature-block";
import { FeatureBlockSchema, FeatureBlockModel } from "./feature-model";
import { FeatureService } from "./Feature-service";

export const FeatureBlockSpec: BlockSpec = {
  schema: FeatureBlockSchema,
  view: {
    component: literal`affine-feature`,
  },
  service: FeatureService,
};

export { FeatureBlockComponent, FeatureService, FeatureBlockModel };

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
