
import utils from './utils';
import plugins from './plugins';
import CountDown from './countDown';
import popup from './popup';
import moment from 'moment';
import 'moment/locale/zh-cn';



import 'animate.css';
import '../sass/index.scss';


const YDJ = {};

YDJ.utils = utils;
YDJ.plugins = plugins;
YDJ.CountDown = CountDown;
YDJ.moment = moment;
YDJ.popup = popup;


YDJ.name = 'ydj';

YDJ.version = '1.0';

export default YDJ;
