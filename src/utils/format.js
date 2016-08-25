/**
 * 格式化相关
 * @module
 * @author vega <vegawong@126.com>
**/

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
