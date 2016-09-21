import EventEmitter from 'eventemitter3';
import moment from 'moment';

const DEFAULTS = {
  mode: 'target', // can be 'target' or 'fixed'
  targetTime: moment().add(1, 'h'),
  unit: 's', // can be m/s/ms, m-分钟 s-秒  ms-毫秒 倒计时的单位
  duration: 10000, // 单位ms
  auto: true
};

const unitDelay = {
  m: 60 * 1 * 1000,
  s: 1 * 1000,
  ms: 1
};


class CountDown extends EventEmitter {
  constructor(options) {
    super();
    this.options = Object.assign({}, DEFAULTS, options);
    this.timer = null;
    this.duration = this.options.duration;
    this.init();
  }

  init() {
    if (this.options.mode === 'target' && typeof this.options.targetTime === 'string') {
      try {
        this.targetTime = moment(this.options.targetTime);
      } catch (error) {
        window.console && window.console.error('options.targetTime is not valid date string format');
      }
    } else if (this.options.mode === 'target' && typeof this.options.targetTime === 'object') {
      this.targetTime = this.options.targetTime;
    }

    if (this.options.mode === 'target' && this.targetTime && this.targetTime.unix() - moment().unix() <= 0) {
      window.console && window.console.error('options.targetTime must greater than now date');
      return;
    }
    if (this.options.mode === 'target' && this.options.auto) {
      this.begin();
    }
  }

  begin() {
    if (this.isBegin) {
      return;
    }
    this.isBegin = true;
    this.run();
  }

  run() {
    const cal = () => {
      if (this.options.mode === 'target') {
        const subValue = this.targetTime.valueOf() - moment().valueOf();
        if (subValue <= 0) {
          this.stop();
          this.emit('end');
        } else {
          this.emit('running', moment.duration(subValue));
          this.run();
        }
      } else {
        const subValue = this.targetTime.valueOf() - moment().valueOf();
        this.duration = moment.duration(subValue).as('ms');
        if (subValue <= 0) {
          this.stop();
          this.emit('running', moment.duration(0));
          this.emit('end');
        } else {
          this.emit('running', moment.duration(subValue));
          this.run();
        }
      }
    };


    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (!this.running) {
      this.running = true;
      if (this.options.mode === 'fixed') {
        this.targetTime = moment().add(this.duration, 'ms');
      }
      cal();
    }

    this.timer = setTimeout(() => {
      cal();
    }, unitDelay[this.options.unit] || 1000);
  }

  stop() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.running = false;
    this.isBegin = false;
    this.emit('stop');
  }

  reset() {
    if (this.options.mode !== 'fixed') {
      return;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.duration = this.options.duration;
    this.emit('running', moment.duration(this.duration, 'ms'));
    this.running = false;
    this.isBegin = false;
    this.emit('reset');
  }

}


export default CountDown;
