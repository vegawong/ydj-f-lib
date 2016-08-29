
var path = require('path');
var webpack = require('webpack');

module.exports = function(webpackConfig) {
  // 去除第一个插件CommonChunksPlugin
  webpackConfig.plugins = webpackConfig.plugins.slice(1);
  webpackConfig.entry = {
    YDJ: path.join(process.cwd(), 'src/index.js'),
    fullPage: path.join(process.cwd(), 'src/fullPage.js'),
  }

  webpackConfig.externals = [
      {
        jquery: {
          root: 'jQuery',
          commonjs2: 'jquery',
          commonjs: 'jquery',
          amd: 'jquery'
        }
      }
    ];

  webpackConfig.output.library = 'YDJ';
  webpackConfig.output.libraryTarget = 'umd';

  return webpackConfig;
}
