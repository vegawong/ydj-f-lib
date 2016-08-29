import $ from 'jquery';

const toggle = '[ydj-role="tooltips"]';

class Tooltips {
  constructor(el, option) {
    this.$el = $(el);
    this.options = $.extend({}, Tooltips.DEFAULTS, this.$el.data(), option);
    this.$tooltip = null;
    this.content = '';
    this.tooltipdelay = null;
    this.checkdelay = null;
    this.init();
  }

  init() {
    if (!this.$tooltip) {
      this.$tooltip = $(`<div class="ydj-tooltip" role="qqTootip"><div class="tooltips-inner">qq</div></div>`).appendTo('body');
    }

    this.$el.on({
      focus: () => this.show(),
      blur: () => this.hide(),
      mouseenter: () => this.show(),
      mouseleave: () => this.hide()
    });
  }


  getPosition() {
    const pos = $.extend({}, this.$el.offset(), {
      width: this.$el[0].offsetWidth,
      height: this.$el[0].offsetHeight
    });
    const width = this.$tooltip[0].offsetWidth;
    const height = this.$tooltip[0].offsetHeight;
    const offset = typeof(this.options.offset) === "function" ? this.options.offset.call(this.$el) : this.options.offset;
    let position = typeof(this.options.pos) === "function" ? this.options.pos(this.$el) : this.options.pos;
    let tmppos = position.split('-');
    let tcss = {
      "display": "none",
      "visibility": "visible",
      "top": (pos.top + pos.height + height),
      "left": pos.left
    };
    const variants = {
      "bottom": {
        top: pos.top + pos.height + offset,
        left: pos.left + pos.width / 2 - width /2
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

    $.extend(tcss, variants[tmppos[0]]);

    if (tmppos.length == 2) tcss.left = (tmppos[1] == "left") ? pos.left : pos.left + pos.width - width;

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
            position = (tcss.top < 0 ? "bottom" : "top");
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
      $.extend(tcss, variants[tmppos[0]]);
      if (tmppos.length == 2) tcss.left = (tmppos[1] == "left") ? pos.left : pos.left + pos.width - width;
    }
    tcss.left -= $("body").position().left;
    return [tcss, position];
  }

  setPosition() {
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
  }

  show() {
    this.content = typeof(this.options.content) === "function" ? this.options.content(this.$el) : this.options.content;

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
      this.$tooltip.find(".tooltips-inner").load(this.options.url, () => {
        // 设置位置
        this.setPosition();
      });
    }
    this.tooltipdelay = setTimeout(() => {
      // 设置位置
      this.setPosition();

      this.tooltipdelay = false;

      this.checkdelay = setInterval(() => {
        if (!this.$el.is(':visible')) {
          this.hide();
        }
      }, 150);
    }, parseInt(this.options.delay, 10) || 0);
  }

  hide() {
    if (this.$el.is('input') && this.$el[0] === document.activeElement) return;

    if (this.tooltipdelay) clearTimeout(this.tooltipdelay);
    if (this.checkdelay) clearTimeout(this.checkdelay);

    this.$tooltip.stop();

    if (this.options.animation) {

      this.$tooltip.fadeOut(parseInt(this.options.animation, 10) || 400, () => {
        this.$tooltip.removeClass(this.options.active);
      })
    } else {
      this.$tooltip.hide().removeClass(this.options.active)
    }

  }

  checkBoundary(left, top, width, height) {
    var axis = "";

    if (left < 0 || (left - $(document).scrollLeft() + width > $(window).width())) {
      axis += "x";
    }

    if (top < 0 || (top - $(document).scrollTop() + height) > $(window).height()) {
      axis += "y";
    }

    return axis;
  }

}

Tooltips.VERSION = '{{VERSION}}';
// 动画过渡时间
Tooltips.TRANSITION_DURATION = 150;

Tooltips.DEFAULTS = {
  "offset": 8,   // tip与el之间的间距, 单位px
  "pos": function($el) {
    let pos = $el.attr('pos');
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
  "content": function(elem, title) {
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
  return $(this).each(function() {
    var $this = $(this);
    var data = $this.data('ui.tooltips');
    if (!data) $this.data('ui.tooltips', (data = new Tooltips(this, option)));
    if (typeof option == 'string') data[option]();
  })
}


// jQuery 插件扩展
// -------------
$.fn.tooltips = Plugin;
$.fn.tooltips.Constructor = Tooltips;

// 元素插件绑定
// ----------
var handler = function() {
  $(this).tooltips('show');
};

$(function() {
  $(document).on('mouseenter.ui.tooltips focus.ui.tooltips', toggle, handler)
})

export default Tooltips;
