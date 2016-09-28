(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "moment"], factory);
	else if(typeof exports === 'object')
		exports["YDJ"] = factory(require("jquery"), require("moment"));
	else
		root["YDJ"] = factory(root["jQuery"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_48__) {
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

	var _utils = __webpack_require__(56);

	var _utils2 = _interopRequireDefault(_utils);

	var _plugins = __webpack_require__(51);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _countDown = __webpack_require__(50);

	var _countDown2 = _interopRequireDefault(_countDown);

	var _popup = __webpack_require__(54);

	var _popup2 = _interopRequireDefault(_popup);

	var _moment = __webpack_require__(48);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(97);

	__webpack_require__(96);

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

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41)
	  , defined = __webpack_require__(20);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7)
	  , createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(5) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(40)
	  , toPrimitive    = __webpack_require__(30)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(28)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(1).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(60);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(59);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(1)
	  , core      = __webpack_require__(4)
	  , ctx       = __webpack_require__(38)
	  , hide      = __webpack_require__(6)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(21);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(10)
	  , dPs         = __webpack_require__(78)
	  , enumBugKeys = __webpack_require__(21)
	  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(39)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(71).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(7).f
	  , has = __webpack_require__(2)
	  , TAG = __webpack_require__(8)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(28)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(1)
	  , core           = __webpack_require__(4)
	  , LIBRARY        = __webpack_require__(23)
	  , wksExt         = __webpack_require__(32)
	  , defineProperty = __webpack_require__(7).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(8);

/***/ },
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(58);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(57);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(9);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(9);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(67);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(1).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(5) && !__webpack_require__(12)(function(){
	  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(37);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(23)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(46)
	  , hide           = __webpack_require__(6)
	  , has            = __webpack_require__(2)
	  , Iterators      = __webpack_require__(22)
	  , $iterCreate    = __webpack_require__(73)
	  , setToStringTag = __webpack_require__(26)
	  , getPrototypeOf = __webpack_require__(80)
	  , ITERATOR       = __webpack_require__(8)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(17)
	  , createDesc     = __webpack_require__(18)
	  , toIObject      = __webpack_require__(3)
	  , toPrimitive    = __webpack_require__(30)
	  , has            = __webpack_require__(2)
	  , IE8_DOM_DEFINE = __webpack_require__(40)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(45)
	  , hiddenKeys = __webpack_require__(21).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(2)
	  , toIObject    = __webpack_require__(3)
	  , arrayIndexOf = __webpack_require__(69)(false)
	  , IE_PROTO     = __webpack_require__(27)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(20);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(9);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(34);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(36);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(35);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _eventemitter = __webpack_require__(33);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	var _moment = __webpack_require__(48);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	  (0, _inherits3.default)(CountDown, _EventEmitter);

	  function CountDown(options) {
	    (0, _classCallCheck3.default)(this, CountDown);

	    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

	    _this.options = (0, _assign2.default)({}, DEFAULTS, options);
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
	    } else if (this.options.mode === 'target' && (0, _typeof3.default)(this.options.targetTime) === 'object') {
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltips = __webpack_require__(53);

	var _tooltips2 = _interopRequireDefault(_tooltips);

	var _toast = __webpack_require__(52);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Tooltips: _tooltips2.default,
	  Toast: _toast2.default
	};
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(9);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _jquery = __webpack_require__(15);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    (0, _classCallCheck3.default)(this, Toast);

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
	    } else if ((0, _typeof3.default)(this.options.position) === 'object') {
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _jquery = __webpack_require__(15);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var toggle = '[ydj-role="tooltips"]';

	var Tooltips = function () {
	  function Tooltips(el, option) {
	    (0, _classCallCheck3.default)(this, Tooltips);

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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(36);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(35);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _typeof2 = __webpack_require__(9);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _jquery = __webpack_require__(15);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _eventemitter = __webpack_require__(33);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 默认配置
	/**
	 * 弹框
	 * @module
	 * @author vega <vegawong@126.com>
	 **/

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
	  } else if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object') {
	    _options = options;
	  }
	  return _jquery2.default.extend({}, DEFAULTS, _options);
	};

	var Popup = function (_EventEmitter) {
	  (0, _inherits3.default)(Popup, _EventEmitter);

	  function Popup(options) {
	    (0, _classCallCheck3.default)(this, Popup);

	    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(61);

	var _extends3 = _interopRequireDefault(_extends2);

	var _format = __webpack_require__(55);

	var formats = _interopRequireWildcard(_format);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _extends3.default)({}, formats);
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(34);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	module.exports = __webpack_require__(4).Object.assign;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var $Object = __webpack_require__(4).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	module.exports = __webpack_require__(4).Object.setPrototypeOf;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	module.exports = __webpack_require__(4).Symbol;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	__webpack_require__(94);
	module.exports = __webpack_require__(32).f('iterator');

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(3)
	  , toLength  = __webpack_require__(84)
	  , toIndex   = __webpack_require__(83);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(14)
	  , gOPS    = __webpack_require__(25)
	  , pIE     = __webpack_require__(17);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(37);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(24)
	  , descriptor     = __webpack_require__(18)
	  , setToStringTag = __webpack_require__(26)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(6)(IteratorPrototype, __webpack_require__(8)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(14)
	  , toIObject = __webpack_require__(3);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(2)
	  , setDesc  = __webpack_require__(7).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(12)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(14)
	  , gOPS     = __webpack_require__(25)
	  , pIE      = __webpack_require__(17)
	  , toObject = __webpack_require__(47)
	  , IObject  = __webpack_require__(41)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(12)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(7)
	  , anObject = __webpack_require__(10)
	  , getKeys  = __webpack_require__(14);

	module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(3)
	  , gOPN      = __webpack_require__(44).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(2)
	  , toObject    = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(10);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(38)(Function.call, __webpack_require__(43).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , defined   = __webpack_require__(20);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(68)
	  , step             = __webpack_require__(74)
	  , Iterators        = __webpack_require__(22)
	  , toIObject        = __webpack_require__(3);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(42)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(11);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(77)});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(24)});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(81).set});

/***/ },
/* 89 */
/***/ function(module, exports) {

	

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(82)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(42)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(1)
	  , has            = __webpack_require__(2)
	  , DESCRIPTORS    = __webpack_require__(5)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(46)
	  , META           = __webpack_require__(76).KEY
	  , $fails         = __webpack_require__(12)
	  , shared         = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(26)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(8)
	  , wksExt         = __webpack_require__(32)
	  , wksDefine      = __webpack_require__(31)
	  , keyOf          = __webpack_require__(75)
	  , enumKeys       = __webpack_require__(70)
	  , isArray        = __webpack_require__(72)
	  , anObject       = __webpack_require__(10)
	  , toIObject      = __webpack_require__(3)
	  , toPrimitive    = __webpack_require__(30)
	  , createDesc     = __webpack_require__(18)
	  , _create        = __webpack_require__(24)
	  , gOPNExt        = __webpack_require__(79)
	  , $GOPD          = __webpack_require__(43)
	  , $DP            = __webpack_require__(7)
	  , $keys          = __webpack_require__(14)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(17).f  = $propertyIsEnumerable;
	  __webpack_require__(25).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(23)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31)('asyncIterator');

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31)('observable');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	var global        = __webpack_require__(1)
	  , hide          = __webpack_require__(6)
	  , Iterators     = __webpack_require__(22)
	  , TO_STRING_TAG = __webpack_require__(8)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 95 */,
/* 96 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 97 */
96
/******/ ])))
});
;