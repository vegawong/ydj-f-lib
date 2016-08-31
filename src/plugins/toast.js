import $ from 'jquery';

const DEFAULTS = {
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
  beforeShow: function() {},
  afterShown: function() {},
  beforeHide: function() {},
  afterHidden: function() {}
}

const extendOptions = function(options) {
  let _options={};
  if (typeof options === 'string' || options instanceof Array) {
    _options.text = options;
  } else {
    _options = options;
  }
  return $.extend({}, DEFAULTS, _options);
}

class Toast {
  constructor(options) {
    this.options = extendOptions(options);
    this.positionClasses = ['bottom-left', 'bottom-right', 'top-right', 'top-left', 'bottom-center', 'top-center', 'mid-center'];
    this.defaultIcons = ['success', 'error', 'info', 'warning'];
    this.init();
  }

  init() {
    this.setup();
    this.addToDom();
    this.position();
    this.watch();
    this.animate();
  }



  setup() {
    let toastContent = '';

    this.toastEl = this.toastEl || $('<div></div>', {
      class: 'jq-toast-single'
    });

    // For the loader on top
    toastContent += '<span class="jq-toast-loader"></span>';

    if (this.options.allowToastClose) {
      toastContent += '<span class="close-jq-toast-single">&times;</span>';
    }

    if (this.options.text instanceof Array) {
      if (this.options.heading) {
        toastContent += `h2 class="jq-toast-heading">${this.options.heading}</h2>`;
      }

      toastContent += '<ul class="jq-toast-ul">';
      for (var i = 0; i < this.options.text.length; i++) {
        toastContent += `<li class="jq-toast-li" id="jq-toast-item-${i}">${this.options.text[i]}</li>`;
      }
      toastContent += '</ul>'
    } else {
      if (this.options.heading) {
        toastContent += `<h2 class="jq-toast-heading">${this.options.heading}</h2>`;
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

      if ($.inArray(this.options.icon, this.defaultIcons) !== -1) {
        this.toastEl.addClass(`jq-icon-${this.options.icon}`);
      }
    }
  }

  addToDom() {
    let $container = $('.jq-toast-wrap');

    if ($container.length === 0) {
      $container = $('<div></div>', {
        class: 'jq-toast-wrap'
      });

      $('body').append($container);
    } else if (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) {
      $container.empty();
    }

    $container.find('.jq-toast-single:hidden').remove();
    $container.append(this.toastEl);


    if (this.options.stack && !isNaN(parseInt(this.options.stack, 10))) {
      const preToastCount = $container.find('.jq-toast-single').length;
      const extToastCount = preToastCount - this.options.stack;

      if (extToastCount > 0) {
        $('.jq-toast-wrap').find('.jq-toast-single').slice(0, extToastCount).remove();
      }
    }

    this.$container = $container;

  }

  position() {
    if (typeof this.options.position === 'string' && $.inArray(this.options.position, this.positionClasses) !== -1) {

      if (this.options.position === 'bottom-center') {
        this.$container.css({
          'left': $(window).outerWidth / 2 - this.$container.outerWidth() / 2,
          'bottom': 20
        });
      } else if (this.options.position === 'top-center') {
        this.$container.css({
          'left': $(window).outerWidth() / 2 - this.$container.outerWidth() / 2,
          'top': 20
        });
      } else if (this.options.position === 'mid-center') {
        this.$container.css({
          'left': $(window).outerWidth() / 2 - this.$container.outerWidth() / 2,
          'top': $(window).outerHeight() / 2 - this.$container.outerHeight() / 2
        });
      } else {
        this.$container.addClass(this.options.position);
      }
    } else if (typeof this.options.position === 'object') {
      this.$container.css({
        'top': this.options.position.top ? this.options.position.top : 'auto',
        'bottom': this.options.positon.bottom ? this.options.position.bottom : 'auto',
        'left': this.options.position.left ? this.options.position.left : 'auto',
        'right': this.options.position.right ? this.options.position.right : 'auto'
      });
    } else {
      this.$container.addClass('bottom-left');
    }
  }



  watch() {
    this.toastEl.on('afterShown', () => {
      this.processLoader();
    });

    this.toastEl.find('.close-jq-toast-single').on('click', (e) => {
      e.preventDefault();

      if (this.options.showHideTransition === 'fade') {
        this.toastEl.trigger('beforeHide');
        this.toastEl.fadeOut(() => {
          this.toastEl.trigger('afterHidden');
        });
      } else if (this.options.showHideTransition === 'slide') {
        this.toastEl.trigger('beforeHide');
        this.toastEl.slideUp(() => {
          this.toastEl.trigger('afterHidden');
        });
      } else {
        this.toastEl.trigger('beforeHide');
        this.toastEl.hide(() => {
          this.toastEl.trigger('afterHidden');
        });
      }
    });

    if (typeof this.options.beforeShow === 'function') {
      this.toastEl.on('beforeShow', () => {
        this.options.beforeShow();
      });
    }

    if (typeof this.options.beforeHide === 'function') {
      this.toastEl.on('beforeHide', () => {
        this.options.beforeHide();
      });
    }

    if (typeof this.options.afterHidden === 'function') {
      this.toastEl.on('afterHidden', () => {
        this.options.afterHidden();
      });
    }
  }


  animate() {
    this.toastEl.hide();
    this.toastEl.trigger('beforeShow');

    if (this.options.showHideTransition.toLowerCase() === 'fade') {
      this.toastEl.fadeIn(() => {
        this.toastEl.trigger('afterShown');
      });
    } else if (this.options.showHideTransition.toLowerCase() === 'slide') {
      this.toastEl.slideDown(() => {
        this.toastEl.trigger('afterShown');
      });
    } else {
      this.toastEl.show(() => {
        this.toastEl.trigger('afterShown');
      });
    }

    if (this.canAutoHide()) {
      window.setTimeout(() => {
        if (this.options.showHideTransition.toLowerCase() === 'fade') {
          this.toastEl.trigger('beforeHide');
          this.toastEl.fadeOut(() => {
            this.toastEl.trigger('afterHidden');
          });
        } else if (this.options.showHideTransition.toLowerCase() === 'slide') {
          this.toastEl.trigger('beforeHide');
          this.toastEl.slideUp(() => {
            this.toastEl.trigger('afterHidden');
          });
        } else {
          this.toastEl.trigger('beforeHide');
          this.toastEl.hide(() => {
            this.toastEl.trigger('afterHidden');
          });
        }
      }, this.options.hideAfter);
    }
  }

  processLoader() {
    // Show the loader only, if auto-hide is on and loader is demanded
    if (!this.canAutoHide() || this.options.loader === false) {
      return false
    }
    let loader = this.toastEl.find('.jq-toast-loader');

    //400 is the default time that jquery uses for fade/slide
    // Divide by 1000 for milliseconds to seconds conversion
    let transitionTime = (this.options.hideAfter - 400) / 1000 + 's';
    let loaderBg = this.options.loaderBg;

    let style = loader.attr('style') || '';
    style = style.substring(0, style.indexOf('-webkit-transition')); // Remove the last transition definition

    style +=
      `-webkit-transition: width ${transitionTime} ease-in;
      -o-transition: width ${transitionTime} ease-in;
      transition: width ${transitionTime} ease-in;
      background-color: ${loaderBg};`;

    loader.attr('style', style).addClass('jq-toast-loaded');
  }

  canAutoHide() {
    return this.options.hideAfter !== false && !isNaN(parseInt(this.options.hideAfter, 10));
  }

  reset(resetWhat) {
    if (resetWhat === 'all') {
      $('.jq-toast-wrap').remove();
    } else {
      this.toastEl.remove();
    }
  }

  update(options) {
    this.options = extendOptions(options);
    this.setup();
    this.watch();
  }

}

$.toast = function(options) {
  var instance = new Toast(options);
  return {
    reset: what => instance.reset(what),
    update: options => instance.update(options)
  }
}

export default Toast;
