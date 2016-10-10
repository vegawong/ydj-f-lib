var config = require('./webpack.prod.config.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(webpackConfig) {
  webpackConfig = config(webpackConfig);
  webpackConfig.plugins.push(new CleanWebpackPlugin(['dist'], {
    root: process.cwd(),
    verbose: true,
    dry: false
  }));
  webpackConfig.output.filename = '[name].min.js';
  webpackConfig.plugins[0].filename = '[name].min.css';
  return webpackConfig;

}
