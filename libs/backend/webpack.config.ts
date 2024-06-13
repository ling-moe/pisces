import { composePlugins, withNx } from '@nx/webpack';
import { swcDefaultsFactory } from '@nestjs/cli/lib/compiler/defaults/swc-defaults';
const swcDefaultConfig = swcDefaultsFactory().swcOptions;

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  const module = {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: swcDefaultConfig,
        },
      },
    ],
  };
  config.module = module;
  return config;
});
