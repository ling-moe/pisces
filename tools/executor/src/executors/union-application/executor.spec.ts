import { UnionApplicationExecutorSchema } from './schema';
import executor from './executor';

const options: UnionApplicationExecutorSchema = {};

describe('UnionApplication Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
