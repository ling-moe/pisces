import { UnionApplicationExecutorSchema } from './schema';

export default async function runExecutor(options: UnionApplicationExecutorSchema) {
  console.log('Executor ran for UnionApplication', options);
  return {
    success: true,
  };
}
