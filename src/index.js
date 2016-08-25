
import utils from './utils';
import plugins from './plugins';

import '../sass/index.scss';

const YDJ = {};

YDJ.utils = utils;
YDJ.plugins = plugins;

YDJ.testFunc = function() {
  console.log('i am a func');
}

YDJ.name = 'ydj';

YDJ.version = '1.0';

export default YDJ;
