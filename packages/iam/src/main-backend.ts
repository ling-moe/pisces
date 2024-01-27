import { Logger, Module } from '@nestjs/common';
import { NestApplication, NestFactory,RouterModule } from '@nestjs/core';
import { CoreBackendModule } from '@pisces/backend';
import bodyParser from 'body-parser';
import { BigIntModule, initStandard } from '@pisces/common';
import { IamBackendModule } from './app/iam.backend.module';
import express from 'express';
import path from 'path';
import { Configuration, HotModuleReplacementPlugin,webpack } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

@Module({
  imports: [
    CoreBackendModule,
    IamBackendModule,
    RouterModule.register([
      {
        path: 'api',
        module: IamBackendModule,
      },
    ]),
  ]
})
export class IamModule { }

async function bootstrap() {
  initStandard();
  const app = await NestFactory.create<NestApplication>(IamModule);
  app.use(bodyParser.json({ reviver: BigIntModule }));
  // 载入前端hmr
  loadFrontendHMR(app);
  // 静态文件目录，用于存放 Angular 应用的构建结果
  loadFrontend(app);

  const port = process.env.PORT || 3100;
  await app.listen(port);
  Logger.log(
    `🚀 IamApplication is running on: http://localhost:${port}`
  );
}

bootstrap();
function loadFrontendHMR(app: NestApplication) {
  const webpackConfig: Configuration = {
    mode: "development",
    entry: [
      'webpack-hot-middleware/client',
      path.join(__dirname, '../frontend/browser/main.js')
    ],
    output: {
      path: path.resolve(__dirname),
      filename: 'main.js',
    },
    plugins: [
      new HotModuleReplacementPlugin()
    ],
    stats: 'summary'
  };

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler));

  app.use(webpackHotMiddleware(compiler));
}

function loadFrontend(app: NestApplication) {
  app.use(express.static(path.join(__dirname, '../frontend/browser')));

  // 所有其他路由都指向 Angular 应用的入口文件
  app.getHttpAdapter().get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/browser/index.html'));
  });
}
