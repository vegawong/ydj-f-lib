(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "moment"], factory);
	else if(typeof exports === 'object')
		exports["YDJ"] = factory(require("jquery"), require("moment"));
	else
		root["YDJ"] = factory(root["jQuery"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(11);

	var _utils2 = _interopRequireDefault(_utils);

	var _plugins = __webpack_require__(6);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _countDown = __webpack_require__(5);

	var _countDown2 = _interopRequireDefault(_countDown);

	var _popup = __webpack_require__(9);

	var _popup2 = _interopRequireDefault(_popup);

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(14);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var YDJ = {};

	YDJ.utils = _utils2.default;
	YDJ.plugins = _plugins2.default;
	YDJ.CountDown = _countDown2.default;
	YDJ.moment = _moment2.default;
	YDJ.popup = _popup2.default;

	YDJ.name = 'ydj';

	YDJ.version = '1.0';

	exports.default = YDJ;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _eventemitter = __webpack_require__(2);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var DEFAULTS = {
	  mode: 'target', // can be 'target' or 'fixed'
	  targetTime: (0, _moment2.default)().add(1, 'h'),
	  unit: 's', // can be m/s/ms, m-分钟 s-秒  ms-毫秒 倒计时的单位
	  duration: 10000, // 单位ms
	  auto: true
	};

	var unitDelay = {
	  m: 60 * 1 * 1000,
	  s: 1 * 1000,
	  ms: 1
	};

	var CountDown = function (_EventEmitter) {
	  _inherits(CountDown, _EventEmitter);

	  function CountDown(options) {
	    _classCallCheck(this, CountDown);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.options = Object.assign({}, DEFAULTS, options);
	    _this.timer = null;
	    _this.duration = _this.options.duration;
	    _this.init();
	    return _this;
	  }

	  CountDown.prototype.init = function init() {
	    if (this.options.mode === 'target' && typeof this.options.targetTime === 'string') {
	      try {
	        this.targetTime = (0, _moment2.default)(this.options.targetTime);
	      } catch (error) {
	        window.console && window.console.error('options.targetTime is not valid date string format');
	      }
	    } else if (this.options.mode === 'target' && _typeof(this.options.targetTime) === 'object') {
	      this.targetTime = this.options.targetTime;
	    }

	    if (this.options.mode === 'target' && this.targetTime && this.targetTime.unix() - (0, _moment2.default)().unix() <= 0) {
	      window.console && window.console.error('options.targetTime must greater than now date');
	      return;
	    }
	    if (this.options.mode === 'target' && this.options.auto) {
	      this.begin();
	    }
	  };

	  CountDown.prototype.begin = function begin() {
	    if (this.isBegin) {
	      return;
	    }
	    this.isBegin = true;
	    this.run();
	  };

	  CountDown.prototype.run = function run() {
	    var _this2 = this;

	    var cal = function cal() {
	      if (_this2.options.mode === 'target') {
	        var subValue = _this2.targetTime.valueOf() - (0, _moment2.default)().valueOf();
	        if (subValue <= 0) {
	          _this2.stop();
	          _this2.emit('end');
	        } else {
	          _this2.emit('running', _moment2.default.duration(subValue));
	          _this2.run();
	        }
	      } else {
	        var _subValue = _this2.targetTime.valueOf() - (0, _moment2.default)().valueOf();
	        _this2.duration = _moment2.default.duration(_subValue).as('ms');
	        if (_subValue <= 0) {
	          _this2.stop();
	          _this2.emit('running', _moment2.default.duration(0));
	          _this2.emit('end');
	        } else {
	          _this2.emit('running', _moment2.default.duration(_subValue));
	          _this2.run();
	        }
	      }
	    };

	    if (this.timer) {
	      clearTimeout(this.timer);
	    }
	    if (!this.running) {
	      this.running = true;
	      if (this.options.mode === 'fixed') {
	        this.targetTime = (0, _moment2.default)().add(this.duration, 'ms');
	      }
	      cal();
	    }

	    this.timer = setTimeout(function () {
	      cal();
	    }, unitDelay[this.options.unit] || 1000);
	  };

	  CountDown.prototype.stop = function stop() {
	    if (this.timer) {
	      clearTimeout(this.timer);
	    }
	    this.running = false;
	    this.isBegin = false;
	    this.emit('stop');
	  };

	  CountDown.prototype.reset = function reset() {
	    if (this.options.mode !== 'fixed') {
	      return;
	    }
	    if (this.timer) {
	      clearTimeout(this.timer);
	    }
	    this.duration = this.options.duration;
	    this.emit('running', _moment2.default.duration(this.duration, 'ms'));
	    this.running = false;
	    this.isBegin = false;
	    this.emit('reset');
	  };

	  return CountDown;
	}(_eventemitter2.default);

	exports.default = CountDown;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltips = __webpack_require__(8);

	var _tooltips2 = _interopRequireDefault(_tooltips);

	var _toast = __webpack_require__(7);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Tooltips: _tooltips2.default,
	  Toast: _toast2.default
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DEFAULTS = {
	  text: '',
	  heading: '',
	  showHideTransition: 'fade',
	  allowToastClose: true,
	  hideAfter: 3000,
	  loader: false,
	  loaderBg: '#9EC600',
	  stack: 5,
	  position: 'mid-center',
	  bgColor: false,
	  textColor: false,
	  textAlign: 'left',
	  icon: false,
	  beforeShow: function beforeShow() {},
	  afterShown: function afterShown() {},
	  beforeHide: function beforeHide() {},
	  afterHidden: function afterHidden() {}
	};

	var extendOptions = function extendOptions(options) {
	  var _options = {};
	  if (typeof options === 'string' || options instanceof Array) {
	    _options.text = options;
	  } else {
	    _options = options;
	  }
	  return _jquery2.default.extend({}, DEFAULTS, _options);
	};

	var Toast = function () {
	  function Toast(options) {
	    _classCallCheck(this, Toast);

	    this.options = extendOptions(options);
	    this.positionClasses = ['bottom-left', 'bottom-right', 'top-right', 'top-left', 'bottom-center', 'top-center', 'mid-center'];
	    this.defaultIcons = ['success', 'error', 'info', 'warning'];
	    this.init();
	  }

	  Toast.prototype.init = function init() {
	    this.setup();
	    this.addToDom();
	    this.position();
	    this.watch();
	    this.animate();
	  };

	  Toast.prototype.setup = function setup() {
	    var toastContent = '';

	    this.toastEl = this.toastEl || (0, _jquery2.default)('<div></div>', {
	      class: 'jq-toast-single'
	    });

	    // For the loader on top
	    toastContent += '<span class="jq-toast-loader"></span>';

	    if (this.options.allowToastClose) {
	      toastContent += '<span class="close-jq-toast-single">&times;</span>';
	    }

	    if (this.options.text instanceof Array) {
	      if (this.options.heading) {
	        toastContent += 'h2 class="jq-toast-heading">' + this.options.heading + '</h2>';
	      }

	      toastContent += '<ul class="jq-toast-ul">';
	      for (var i = 0; i < this.options.text.length; i++) {
	        toastContent += '<li class="jq-toast-li" id="jq-toast-item-' + i + '">' + this.options.text[i] + '</li>';
	      }
	      toastContent += '</ul>';
	    } else {
	      if (this.options.heading) {
	        toastContent += '<h2 class="jq-toast-heading">' + this.options.heading + '</h2>';
	      }
	      toastContent += this.options.text;
	    }

	    this.toastEl.html(toastContent);

	    if (this.options.bgColor !== false) {
	      this.toastEl.css('background-color', this.options.bgColor);
	    }

	    if (this.options.textColor !== false) {
	      this.toastEl.css('color', this.options.textColor);
	    }

	    if (this.options.icon !== false) {
	      this.toastEl.addClass('jq-has-icon');

	      if (_jquery2.default.inArray(this.options.icon, this.defaultIcons) !== -1) {
	        this.toastEl.addClass('jq-icon-' + this.options.icon);
	      }
	    }
	  };

	  Toast.prototype.addToDom = function addToDom() {
	    var $container = (0, _jquery2.default)('.jq-toast-wrap');

	    if ($container.length === 0) {
	      $container = (0, _jquery2.default)('<div></div>', {
	        class: 'jq-toast-wrap'
	      });

	      (0, _jquery2.default)('body').append($container);
	    } else if (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) {
	      $container.empty();
	    }

	    $container.find('.jq-toast-single:hidden').remove();
	    $container.append(this.toastEl);

	    if (this.options.stack && !isNaN(parseInt(this.options.stack, 10))) {
	      var preToastCount = $container.find('.jq-toast-single').length;
	      var extToastCount = preToastCount - this.options.stack;

	      if (extToastCount > 0) {
	        (0, _jquery2.default)('.jq-toast-wrap').find('.jq-toast-single').slice(0, extToastCount).remove();
	      }
	    }

	    this.$container = $container;
	  };

	  Toast.prototype.position = function position() {
	    if (typeof this.options.position === 'string' && _jquery2.default.inArray(this.options.position, this.positionClasses) !== -1) {

	      if (this.options.position === 'bottom-center') {
	        this.$container.css({
	          'left': (0, _jquery2.default)(window).outerWidth / 2 - this.$container.outerWidth() / 2,
	          'bottom': 20
	        });
	      } else if (this.options.position === 'top-center') {
	        this.$container.css({
	          'left': (0, _jquery2.default)(window).outerWidth() / 2 - this.$container.outerWidth() / 2,
	          'top': 20
	        });
	      } else if (this.options.position === 'mid-center') {
	        this.$container.css({
	          'left': (0, _jquery2.default)(window).outerWidth() / 2 - this.$container.outerWidth() / 2,
	          'top': (0, _jquery2.default)(window).outerHeight() / 2 - this.$container.outerHeight() / 2
	        });
	      } else {
	        this.$container.addClass(this.options.position);
	      }
	    } else if (_typeof(this.options.position) === 'object') {
	      this.$container.css({
	        'top': this.options.position.top ? this.options.position.top : 'auto',
	        'bottom': this.options.positon.bottom ? this.options.position.bottom : 'auto',
	        'left': this.options.position.left ? this.options.position.left : 'auto',
	        'right': this.options.position.right ? this.options.position.right : 'auto'
	      });
	    } else {
	      this.$container.addClass('bottom-left');
	    }
	  };

	  Toast.prototype.watch = function watch() {
	    var _this = this;

	    this.toastEl.on('afterShown', function () {
	      _this.processLoader();
	    });

	    this.toastEl.find('.close-jq-toast-single').on('click', function (e) {
	      e.preventDefault();

	      if (_this.options.showHideTransition === 'fade') {
	        _this.toastEl.trigger('beforeHide');
	        _this.toastEl.fadeOut(function () {
	          _this.toastEl.trigger('afterHidden');
	        });
	      } else if (_this.options.showHideTransition === 'slide') {
	        _this.toastEl.trigger('beforeHide');
	        _this.toastEl.slideUp(function () {
	          _this.toastEl.trigger('afterHidden');
	        });
	      } else {
	        _this.toastEl.trigger('beforeHide');
	        _this.toastEl.hide(function () {
	          _this.toastEl.trigger('afterHidden');
	        });
	      }
	    });

	    if (typeof this.options.beforeShow === 'function') {
	      this.toastEl.on('beforeShow', function () {
	        _this.options.beforeShow();
	      });
	    }

	    if (typeof this.options.beforeHide === 'function') {
	      this.toastEl.on('beforeHide', function () {
	        _this.options.beforeHide();
	      });
	    }

	    if (typeof this.options.afterHidden === 'function') {
	      this.toastEl.on('afterHidden', function () {
	        _this.options.afterHidden();
	      });
	    }
	  };

	  Toast.prototype.animate = function animate() {
	    var _this2 = this;

	    this.toastEl.hide();
	    this.toastEl.trigger('beforeShow');

	    if (this.options.showHideTransition.toLowerCase() === 'fade') {
	      this.toastEl.fadeIn(function () {
	        _this2.toastEl.trigger('afterShown');
	      });
	    } else if (this.options.showHideTransition.toLowerCase() === 'slide') {
	      this.toastEl.slideDown(function () {
	        _this2.toastEl.trigger('afterShown');
	      });
	    } else {
	      this.toastEl.show(function () {
	        _this2.toastEl.trigger('afterShown');
	      });
	    }

	    if (this.canAutoHide()) {
	      window.setTimeout(function () {
	        if (_this2.options.showHideTransition.toLowerCase() === 'fade') {
	          _this2.toastEl.trigger('beforeHide');
	          _this2.toastEl.fadeOut(function () {
	            _this2.toastEl.trigger('afterHidden');
	          });
	        } else if (_this2.options.showHideTransition.toLowerCase() === 'slide') {
	          _this2.toastEl.trigger('beforeHide');
	          _this2.toastEl.slideUp(function () {
	            _this2.toastEl.trigger('afterHidden');
	          });
	        } else {
	          _this2.toastEl.trigger('beforeHide');
	          _this2.toastEl.hide(function () {
	            _this2.toastEl.trigger('afterHidden');
	          });
	        }
	      }, this.options.hideAfter);
	    }
	  };

	  Toast.prototype.processLoader = function processLoader() {
	    // Show the loader only, if auto-hide is on and loader is demanded
	    if (!this.canAutoHide() || this.options.loader === false) {
	      return false;
	    }
	    var loader = this.toastEl.find('.jq-toast-loader');

	    //400 is the default time that jquery uses for fade/slide
	    // Divide by 1000 for milliseconds to seconds conversion
	    var transitionTime = (this.options.hideAfter - 400) / 1000 + 's';
	    var loaderBg = this.options.loaderBg;

	    var style = loader.attr('style') || '';
	    style = style.substring(0, style.indexOf('-webkit-transition')); // Remove the last transition definition

	    style += '-webkit-transition: width ' + transitionTime + ' ease-in;\n      -o-transition: width ' + transitionTime + ' ease-in;\n      transition: width ' + transitionTime + ' ease-in;\n      background-color: ' + loaderBg + ';';

	    loader.attr('style', style).addClass('jq-toast-loaded');
	  };

	  Toast.prototype.canAutoHide = function canAutoHide() {
	    return this.options.hideAfter !== false && !isNaN(parseInt(this.options.hideAfter, 10));
	  };

	  Toast.prototype.reset = function reset(resetWhat) {
	    if (resetWhat === 'all') {
	      (0, _jquery2.default)('.jq-toast-wrap').remove();
	    } else {
	      this.toastEl.remove();
	    }
	  };

	  Toast.prototype.update = function update(options) {
	    this.options = extendOptions(options);
	    this.setup();
	    this.watch();
	  };

	  return Toast;
	}();

	_jquery2.default.toast = function (options) {
	  var instance = new Toast(options);
	  return {
	    reset: function reset(what) {
	      return instance.reset(what);
	    },
	    update: function update(options) {
	      return instance.update(options);
	    }
	  };
	};

	exports.default = Toast;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(1);

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * 弹框
	                                                                                                                                                                                                                                                   * @module
	                                                                                                                                                                                                                                                   * @author vega <vegawong@126.com>
	                                                                                                                                                                                                                                                   **/

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _eventemitter = __webpack_require__(2);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// 默认配置
	var DEFAULTS = {
	  text: '',
	  autoShow: true,
	  inAnimate: 'zoomIn',
	  outAnimate: 'zoomOut',
	  autoDestroy: true,
	  afterHidden: function afterHidden() {}
	};

	var extendOptions = function extendOptions(options) {
	  var _options = {};
	  if (typeof options === 'string') {
	    _options.text = options;
	  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    _options = options;
	  }
	  return _jquery2.default.extend({}, DEFAULTS, _options);
	};

	var Popup = function (_EventEmitter) {
	  _inherits(Popup, _EventEmitter);

	  function Popup(options) {
	    _classCallCheck(this, Popup);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.options = extendOptions(options);
	    _this.init();
	    return _this;
	  }

	  Popup.prototype.init = function init() {
	    if ((0, _jquery2.default)('.ydj-block-bg').length) {
	      this.$bg = (0, _jquery2.default)('.ydj-block-bg');
	    } else {
	      this.$bg = (0, _jquery2.default)('<div></div>', {
	        class: 'ydj-block-bg'
	      });
	      (0, _jquery2.default)('body').append(this.$bg);
	    }
	    this.$el = (0, _jquery2.default)('\n      <div class="ydj-popup">\n        <div class="ydj-popup-wrap">\n          <div class="ydj-popup-container animated">\n            <a href="javascript:;" class="ydj-popup-close">×</a>\n            <div class="ydj-popup-content">\n\n            </div>\n          </div>\n        </div>\n      </div>\n    ');

	    (0, _jquery2.default)('body').append(this.$el);
	    this.watch();
	    if (this.options.autoShow) {
	      this.show();
	    }
	  };

	  Popup.prototype.show = function show(text) {
	    var _this2 = this;

	    if (text) {
	      this.options.text = text;
	    }
	    this.$el.find('.ydj-popup-content').html(this.options.text);
	    var $container = this.$el.find('.ydj-popup-container');
	    $container.addClass(this.options.inAnimate);
	    this.$bg.show(0, function () {
	      _this2.$el.show();
	      setTimeout(function () {
	        $container.removeClass(_this2.options.inAnimate);
	      }, 300);
	    });
	  };

	  Popup.prototype.hide = function hide() {
	    var _this3 = this;

	    var $container = this.$el.find('.ydj-popup-container');
	    setTimeout(function () {
	      _this3.$el.hide(0, function () {
	        $container.removeClass(_this3.options.outAnimate);
	        _this3.$bg.hide(0, function () {
	          if (typeof _this3.options.afterHidden === 'function') {
	            _this3.options.afterHidden.call(_this3);
	          }
	          _this3.emit('hide');
	        });
	      });
	    }, 300);
	    $container.addClass(this.options.outAnimate);
	  };

	  Popup.prototype.watch = function watch() {
	    var _this4 = this;

	    this.$el.on('click', '.ydj-popup-close', function () {
	      _this4.hide();
	    });
	  };

	  return Popup;
	}(_eventemitter2.default);

	var popup = function popup() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var instance = getInstance();

	  function getInstance() {
	    if (!instance) {
	      instance = new Popup(options);
	      instance.on('hide', function () {
	        if (instance.options.autoDestroy) {
	          instance.$el.remove();
	          instance.$bg.remove();
	          instance = null;
	        }
	      });
	    }
	    return instance;
	  }

	  return {
	    show: function show(text) {
	      return getInstance().show(text);
	    },
	    hide: function hide() {
	      return getInstance().hide();
	    }
	  };
	};

	exports.default = popup;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatRMB = formatRMB;
	exports.formatNumber = formatNumber;
	/**
	 * 格式化相关
	 * @module
	 * @author vega <vegawong@126.com>
	**/

	// 价钱人民币格式化显式
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

	// 格式化数字, 前补0
	function formatNumber(num) {
	  var width = arguments.length <= 1 || arguments[1] === undefined ? '2' : arguments[1];

	  var tmpNum = Number(num);
	  if (isNaN(tmpNum)) {
	    return num;
	  }
	  var prefix = '0';
	  var res = '';
	  if (tmpNum.toString().length < width) {
	    var len = width - tmpNum.toString().length;
	    for (var i = 0; i < len; i++) {
	      tmpNum = '' + prefix + tmpNum;
	    }
	  }
	  if (tmpNum.toString().length > width) {
	    tmpNum = tmpNum.toString().substr(0, 2);
	  }
	  return tmpNum;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _format = __webpack_require__(10);

	var formats = _interopRequireWildcard(_format);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = _extends({}, formats);
	module.exports = exports['default'];

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
13
/******/ ])))
});
;