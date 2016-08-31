/**
 * 格式化相关
 * @module
 * @author vega <vegawong@126.com>
**/

// 价钱人民币格式化显式
export function formatRMB (str = '') {
  let res = str;
  if (typeof str === 'number') {
    res = str.toString();
  }
  res = res.replace(/^￥/, '');
  try {
    res = Number(res).toFixed(2);
    res = `￥${res}`;
    return res;
  } catch(e) {
    window.console && console.error('function: formatRMB, params is not invalid');
    return str;
  }
}

// 格式化数字, 前补0
export function formatNumber(num, width = '2') {
  let tmpNum = Number(num);
  if (isNaN(tmpNum)) {
    return num;
  }
  let prefix = '0';
  let res = '';
  if (tmpNum.toString().length < width) {
    let len = width - tmpNum.toString().length;
    for(let i = 0; i < len; i++) {
      tmpNum = `${prefix}${tmpNum}`
    }
  }
  if (tmpNum.toString().length > width) {
    tmpNum = tmpNum.toString().substr(0,2);
  }
  return tmpNum;
}
