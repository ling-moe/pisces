# iam

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test iam` to execute the unit tests via [Jest](https://jestjs.io).

## 热重载存档
···js
    // 添加前端热重载
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const webpack = require('webpack');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const compiler = webpack({
    mode: "development",
    entry: [
      // 用于 web 套接字传输、热重载逻辑的 web server 客户端
      `webpack-hot-middleware/client?path=http://localhost:3100/__webpack_hmr&timeout=20000`,
      path.join(__dirname, './main.js')
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
      hot:true
    }
  });

  app.getHttpAdapter().getInstance().use(
    webpackDevMiddleware(compiler, {
      publicPath: path.join(__dirname, '../../../dist/iam/browser'),
    })
  );
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app.use(require('webpack-hot-middleware')(compiler,{autoConnect:true}));
```
