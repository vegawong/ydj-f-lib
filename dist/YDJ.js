(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["YDJ"] = factory(require("jquery"));
	else
		root["YDJ"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(4);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _plugins = __webpack_require__(1);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	__webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var YDJ = {};
	
	YDJ.utils = _utils2.default;
	YDJ.plugins = _plugins2.default;
	
	YDJ.testFunc = function () {
	  console.log('i am a func');
	};
	
	YDJ.name = 'ydj';
	
	YDJ.version = '1.0';
	
	exports.default = YDJ;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tooltips = __webpack_require__(2);
	
	var _tooltips2 = _interopRequireDefault(_tooltips);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  Tooltips: _tooltips2.default
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(6);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var toggle = '[ydj-role="tooltips"]';
	
	var Tooltips = function () {
	  function Tooltips(el, option) {
	    _classCallCheck(this, Tooltips);
	
	    this.$el = (0, _jquery2.default)(el);
	    this.options = _jquery2.default.extend({}, Tooltips.DEFAULTS, this.$el.data(), option);
	    this.$tooltip = null;
	    this.content = '';
	    this.tooltipdelay = null;
	    this.checkdelay = null;
	    this.init();
	  }
	
	  Tooltips.prototype.init = function init() {
	    var _this = this;
	
	    if (!this.$tooltip) {
	      this.$tooltip = (0, _jquery2.default)('<div class="ydj-tooltip" role="qqTootip"><div class="tooltips-inner">qq</div></div>').appendTo('body');
	    }
	
	    this.$el.on({
	      focus: function focus() {
	        return _this.show();
	      },
	      blur: function blur() {
	        return _this.hide();
	      },
	      mouseenter: function mouseenter() {
	        return _this.show();
	      },
	      mouseleave: function mouseleave() {
	        return _this.hide();
	      }
	    });
	  };
	
	  Tooltips.prototype.getPosition = function getPosition() {
	    var pos = _jquery2.default.extend({}, this.$el.offset(), {
	      width: this.$el[0].offsetWidth,
	      height: this.$el[0].offsetHeight
	    });
	    var width = this.$tooltip[0].offsetWidth;
	    var height = this.$tooltip[0].offsetHeight;
	    var offset = typeof this.options.offset === "function" ? this.options.offset.call(this.$el) : this.options.offset;
	    var position = typeof this.options.pos === "function" ? this.options.pos(this.$el) : this.options.pos;
	    var tmppos = position.split('-');
	    var tcss = {
	      "display": "none",
	      "visibility": "visible",
	      "top": pos.top + pos.height + height,
	      "left": pos.left
	    };
	    var variants = {
	      "bottom": {
	        top: pos.top + pos.height + offset,
	        left: pos.left + pos.width / 2 - width / 2
	      },
	      "top": {
	        top: pos.top - height - offset,
	        left: pos.left + pos.width / 2 - width / 2
	      },
	      "left": {
	        top: pos.top + pos.height / 2 - height / 2,
	        left: pos.left - width - offset
	      },
	      "right": {
	        top: pos.top + pos.height / 2 - height / 2,
	        left: pos.left + pos.width + offset
	      }
	    };
	
	    _jquery2.default.extend(tcss, variants[tmppos[0]]);
	
	    if (tmppos.length == 2) tcss.left = tmppos[1] == "left" ? pos.left : pos.left + pos.width - width;
	
	    var boundary = this.checkBoundary(tcss.left, tcss.top, width, height);
	    if (boundary) {
	      switch (boundary) {
	        case "x":
	          if (tmppos.length == 2) {
	            position = tmppos[0] + '-' + (tcss.left < 0 ? 'left' : 'right');
	          } else {
	            position = tcss.left < 0 ? 'right' : 'left';
	          }
	          break;
	        case "y":
	          if (tmppos.length == 2) {
	            position = (tcss.top < 0 ? "bottom" : "top") + "-" + tmppos[1];
	          } else {
	            position = tcss.top < 0 ? "bottom" : "top";
	          }
	          break;
	        case "xy":
	          if (tmppos.length == 2) {
	            position = (tcss.top < 0 ? "bottom" : "top") + "-" + (tcss.left < 0 ? "left" : "right");
	          } else {
	            position = tcss.left < 0 ? "right" : "left";
	          }
	          break;
	      }
	      tmppos = position.split('-');
	      _jquery2.default.extend(tcss, variants[tmppos[0]]);
	      if (tmppos.length == 2) tcss.left = tmppos[1] == "left" ? pos.left : pos.left + pos.width - width;
	    }
	    tcss.left -= (0, _jquery2.default)("body").position().left;
	    return [tcss, position];
	  };
	
	  Tooltips.prototype.setPosition = function setPosition() {
	    var myPosition = this.getPosition();
	    this.$tooltip.css(myPosition[0]).attr("class", ['ydj-tooltip', 'tooltips-' + myPosition[1], this.options.cls].join(' '));
	
	    if (this.options.animation) {
	      this.$tooltip.css({
	        opacity: 0,
	        display: "block"
	      }).addClass(this.options.active).animate({
	        opacity: 1
	      }, parseInt(this.options.animation, 10) || 400);
	    } else {
	      this.$tooltip.show().addClass(this.options.active);
	    }
	  };
	
	  Tooltips.prototype.show = function show() {
	    var _this2 = this;
	
	    this.content = typeof this.options.content === "function" ? this.options.content(this.$el) : this.options.content;
	
	    if (this.tooltipdelay) clearTimeout(this.tooltipdelay);
	    if (this.checkdelay) clearTimeout(this.checkdelay);
	
	    if (!this.content.length) return;
	
	    this.$tooltip.stop().css({
	      "top": -2000,
	      "visibility": "hidden"
	    }).removeClass(this.options.active).show();
	    this.$tooltip.find(".tooltips-inner").html(this.content);
	    // 异步
	    if (this.options.url !== '') {
	      this.$tooltip.find(".tooltips-inner").load(this.options.url, function () {
	        // 设置位置
	        _this2.setPosition();
	      });
	    }
	    this.tooltipdelay = setTimeout(function () {
	      // 设置位置
	      _this2.setPosition();
	
	      _this2.tooltipdelay = false;
	
	      _this2.checkdelay = setInterval(function () {
	        if (!_this2.$el.is(':visible')) {
	          _this2.hide();
	        }
	      }, 150);
	    }, parseInt(this.options.delay, 10) || 0);
	  };
	
	  Tooltips.prototype.hide = function hide() {
	    var _this3 = this;
	
	    if (this.$el.is('input') && this.$el[0] === document.activeElement) return;
	
	    if (this.tooltipdelay) clearTimeout(this.tooltipdelay);
	    if (this.checkdelay) clearTimeout(this.checkdelay);
	
	    this.$tooltip.stop();
	
	    if (this.options.animation) {
	
	      this.$tooltip.fadeOut(parseInt(this.options.animation, 10) || 400, function () {
	        _this3.$tooltip.removeClass(_this3.options.active);
	      });
	    } else {
	      this.$tooltip.hide().removeClass(this.options.active);
	    }
	  };
	
	  Tooltips.prototype.checkBoundary = function checkBoundary(left, top, width, height) {
	    var axis = "";
	
	    if (left < 0 || left - (0, _jquery2.default)(document).scrollLeft() + width > (0, _jquery2.default)(window).width()) {
	      axis += "x";
	    }
	
	    if (top < 0 || top - (0, _jquery2.default)(document).scrollTop() + height > (0, _jquery2.default)(window).height()) {
	      axis += "y";
	    }
	
	    return axis;
	  };
	
	  return Tooltips;
	}();
	
	Tooltips.VERSION = '{{VERSION}}';
	// 动画过渡时间
	Tooltips.TRANSITION_DURATION = 150;
	
	Tooltips.DEFAULTS = {
	  "offset": 8, // tip与el之间的间距, 单位px
	  "pos": function pos($el) {
	    var pos = $el.attr('pos');
	    if (pos) {
	      $el.data('cached-pos', pos).removeAttr('pos');
	    }
	    return $el.data('cached-pos') || 'top';
	  },
	  "animation": true,
	  "delay": 0,
	  "cls": "",
	  "active": "active",
	  "url": "",
	  "content": function content(elem, title) {
	    title = elem.attr('title');
	    if (title) {
	      elem.data('cached-title', title).removeAttr('title');
	    }
	    return elem.data('cached-title');
	  }
	};
	
	// 插件定义
	// ----------
	function Plugin(option) {
	  return (0, _jquery2.default)(this).each(function () {
	    var $this = (0, _jquery2.default)(this);
	    var data = $this.data('ui.tooltips');
	    if (!data) $this.data('ui.tooltips', data = new Tooltips(this, option));
	    if (typeof option == 'string') data[option]();
	  });
	}
	
	// jQuery 插件扩展
	// -------------
	console.log(_jquery2.default, _jquery2.default.fn);
	_jquery2.default.fn.tooltips = Plugin;
	_jquery2.default.fn.tooltips.Constructor = Tooltips;
	
	// 元素插件绑定
	// ----------
	var handler = function handler() {
	  (0, _jquery2.default)(this).tooltips('show');
	};
	
	(0, _jquery2.default)(function () {
	  (0, _jquery2.default)(document).on('mouseenter.ui.tooltips focus.ui.tooltips', toggle, handler);
	});
	
	exports.default = Tooltips;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatRMB = formatRMB;
	/**
	 * 格式化相关
	 * @module
	 * @author vega <vegawong@126.com>
	**/
	
	function formatRMB() {
	  var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	  var res = str;
	  if (typeof str === 'number') {
	    res = str.toString();
	  }
	  res = res.replace(/^￥/, '');
	  try {
	    res = Number(res).toFixed(2);
	    res = '￥' + res;
	    return res;
	  } catch (e) {
	    window.console && console.error('function: formatRMB, params is not invalid');
	    return str;
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _format = __webpack_require__(3);
	
	var formats = _interopRequireWildcard(_format);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = _extends({}, formats);
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=YDJ.js.map