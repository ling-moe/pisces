import { BlockModel, Text, defineBlockSchema } from '@blocksuite/store';

type Props = {
  title: string,
  text: Text,
};

export class FeatureContentBlockModel extends BlockModel<Props> {
  constructor() {
    super();
  }
}

export const FeatureContentBlockSchema = defineBlockSchema({
  flavour: 'affine:feature-content',
  props: (): Props => ({
    title: '',
    text: new Text(''),
  }),
  metadata: {
    role: 'hub',
    version: 1,
    parent: ['affine:feature'],
    children: ['affine:paragraph', 'affine:list'],
  },
  toModel: () => {
    return new FeatureContentBlockModel();
  },
});
