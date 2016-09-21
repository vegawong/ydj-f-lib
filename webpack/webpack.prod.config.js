var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function(webpackConfig) {
  // 去除第一个插件CommonChunksPlugin

  webpackConfig.plugins = webpackConfig.plugins.slice(1);

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
    moment: {
      root: 'moment',
      commonjs2: 'moment',
      commonjs: 'moment',
      amd: 'moment'
    }
  }];

  webpackConfig.output.library = 'YDJ';
  webpackConfig.output.libraryTarget = 'umd';

  let conf_min = _.cloneDeep(webpackConfig);
  webpackConfig.plugins.splice(2, 1);
  conf_min.plugins.push(new CleanWebpackPlugin(['dist'], {
    root: process.cwd(),
    verbose: true,
    dry: false
  }));
  conf_min.output.filename = '[name].min.js';
  conf_min.plugins[0].filename = '[name].min.css'
  return [conf_min, webpackConfig];
}
