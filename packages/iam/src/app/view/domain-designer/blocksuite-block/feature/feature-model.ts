import { BlockModel, Text, defineBlockSchema } from '@blocksuite/store';

type Props = {
  story: Text,
  action: Text,
  command: Text,
  event: Text,
  case: Text
};

export class FeatureBlockModel extends BlockModel<Props> {
  constructor() {
    super();
  }
}

export const FeatureBlockSchema = defineBlockSchema({
  flavour: 'affine:feature',
  props: (): Props => ({
    story: new Text('作为...，想要...，以达到...。'),
    action: new Text('提交'),
    command: new Text('校验长度合规'),
    event: new Text('请假条已提交'),
    case: new Text('当前场景：...,若：...，则：...。'),
  }),
  metadata: {
    role: 'hub',
    version: 1,
    parent: ['affine:note'],
    children: ['affine:feature-content'],
  },
  toModel: () => {
    return new FeatureBlockModel();
  },
});
