import { BlockService } from '@blocksuite/block-std';
import { FeatureContentBlockModel } from './feature-content-model';

export class FeatureContentService extends BlockService<FeatureContentBlockModel> {

  override mounted(): void {
    super.mounted();

  }
}
