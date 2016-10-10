var path = require('path');
var webpack = require('webpack');

module.exports = function(webpackConfig) {
  // 去除第一个插件CommonChunksPlugin
  webpackConfig.plugins = webpackConfig.plugins.slice(1);
  // webpackConfig.plugins.push(new CopyWebpackPlugin([{
  //   from: path.join(__dirname, '..', 'node_modules/moment/locale'),
  //   to: 'locale'
  // }]));

  webpackConfig.entry = {
    YDJ: path.join(process.cwd(), 'src/index.js'),
    fullPage: path.join(process.cwd(), 'src/fullPage.js')
  }

  webpackConfig.externals = [{
    jquery: {
      root: 'jQuery',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    },
    // moment: {
    //   // root: 'moment',
    //   commonjs2: 'moment',
    //   commonjs: 'moment',
    //   amd: 'moment'
    // }
  }];

  webpackConfig.output.library = 'YDJ';
  webpackConfig.output.libraryTarget = 'umd';

  // conf_min.output.filename = '[name].min.js';
  // conf_min.plugins[0].filename = '[name].min.css'

  return webpackConfig;
}
