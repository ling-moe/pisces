import { Logger, Module } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { CoreBackendModule } from '@pisces/backend';
import * as bodyParser from 'body-parser';
import { BigIntModule, initStandard } from '@pisces/common';
import { IamBackendModule } from './app/iam.backend.module';
import * as express from 'express'
import * as path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

@Module({
  imports: [
    CoreBackendModule,
    IamBackendModule,
  ]
})
export class IamModule {}

async function bootstrap() {
  initStandard();
  const app = await NestFactory.create<NestApplication>(IamModule);
  app.use(bodyParser.json({ reviver: BigIntModule }))
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const webpackConfig: webpack.Configuration = {
    mode: "development",
    entry: [
      'webpack-hot-middleware/client',
      `${path.join(__dirname, '../frontend/browser')}/main.js` // 你的主入口文件
    ],
    output: {
      path: path.resolve(__dirname),
      filename: 'main.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler));

  app.use(webpackHotMiddleware(compiler));


  // 静态文件目录，用于存放 Angular 应用的构建结果
  loadFrontend(app);

  const port = process.env.PORT || 3100;
  await app.listen(port);
  Logger.log(
    `🚀 IamApplication is running on: http://localhost:${port}`
  );
}

bootstrap();
function loadFrontend(app: NestApplication) {
  app.use(express.static(path.join(__dirname, '../frontend/browser')));

  // 所有其他路由都指向 Angular 应用的入口文件
  app.getHttpAdapter().get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/browser/index.html'));
  });
}
