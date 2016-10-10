var expect = require('chai').expect;

var YDJ = require('../dist/YDJ');

describe('moment 基本测试', function() {
  it('中文语言包加载成功的话应该显示一月', function() {
    YDJ.moment.locale('zh-cn');
    var str = YDJ.moment.months()[0];
    expect(str).to.be.equal('一月');
  });
});
