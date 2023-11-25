// import { UnionApplicationExecutorSchema } from './schema';

// export default async function runExecutor(options: UnionApplicationExecutorSchema) {
//   console.log('Executor ran for UnionApplication', options);
//   return {
//     success: true,
//   };
// }

import { executeWebpackDevServerBuilder } from "@nx/angular/executors";
import { Schema } from "@nx/angular/src/builders/webpack-dev-server/schema";

export default function runExecutor(
  rawOptions: Schema,
  context: import('@angular-devkit/architect').BuilderContext
) {
  console.log('Executor ran for UnionApplication', rawOptions);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require('@angular-devkit/architect').createBuilder(executeWebpackDevServerBuilder(rawOptions,context));
}

