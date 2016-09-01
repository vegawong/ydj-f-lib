/**
 * 弹框
 * @module
 * @author vega <vegawong@126.com>
 **/

import $ from 'jquery';
import EventEmitter from 'eventemitter3';


// 默认配置
const DEFAULTS = {
  text: '',
  autoShow: true,
  inAnimate: 'zoomIn',
  outAnimate: 'zoomOut',
  autoDestroy: true,
  afterHidden: function() {}
}

const extendOptions = (options) => {
  let _options = {}
  if (typeof options === 'string') {
    _options.text = options;
  } else if (typeof options === 'object') {
    _options = options;
  }
  return $.extend({}, DEFAULTS, _options);
}


class Popup extends EventEmitter{
  constructor(options) {
    super();
    this.options = extendOptions(options);
    this.init();
  }


  init() {
    if ($('.ydj-block-bg').length) {
      this.$bg = $('.ydj-block-bg');
    } else {
      this.$bg = $('<div></div>', {
        class: 'ydj-block-bg'
      });
      $('body').append(this.$bg);
    }
    this.$el = $(`
      <div class="ydj-popup">
        <div class="ydj-popup-wrap">
          <div class="ydj-popup-container animated">
            <a href="javascript:;" class="ydj-popup-close">×</a>
            <div class="ydj-popup-content">

            </div>
          </div>
        </div>
      </div>
    `);

    $('body').append(this.$el);
    this.watch();
    if (this.options.autoShow) {
      this.show();
    }
  }

  show(text) {
    if (text) {
      this.options.text = text;
    }
    this.$el.find('.ydj-popup-content').html(this.options.text);
    const $container = this.$el.find('.ydj-popup-container');
    $container.addClass(this.options.inAnimate);
    this.$bg.show(0, () => {
      this.$el.show();
      setTimeout(() => {
        $container.removeClass(this.options.inAnimate);
      }, 300);
    });
  }

  hide() {
    const $container = this.$el.find('.ydj-popup-container');
    setTimeout(() => {
      this.$el.hide(0, () => {
        $container.removeClass(this.options.outAnimate);
        this.$bg.hide(0, () => {
          if(typeof this.options.afterHidden === 'function') {
            this.options.afterHidden.call(this);
          }
          this.emit('hide');
        });
      });
    }, 300);
    $container.addClass(this.options.outAnimate);
  }

  watch() {
    this.$el.on('click', '.ydj-popup-close', () => {
      this.hide();
    });
  }
}

const popup = function(options = {}) {
  let instance = getInstance();

  function getInstance() {
    if (!instance) {
      instance = new Popup(options);
      instance.on('hide', () => {
        if(instance.options.autoDestroy) {
          instance.$el.remove();
          instance.$bg.remove();
          instance = null;
        }
      });
    }
    return instance;
  }

  return {
    show: (text) => getInstance().show(text),
    hide: () => getInstance().hide()
  };
}

export default popup;
