import { BlockService } from '@blocksuite/block-std';
import { FeatureBlockModel } from './feature-model';

export class FeatureService extends BlockService<FeatureBlockModel> {

  override mounted(): void {
    super.mounted();
  }
}
