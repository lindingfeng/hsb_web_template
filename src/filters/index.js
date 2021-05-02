/*
 * @Description: 金额数字使用逗号格式化
 * @MethodAuthor:  lindingfeng
 * @Date: 2021-05-02 20:42:00
*/
export const fmoney = (value, digits = 2) => {
  let values = String(parseFloat((String(value)).replace(/[^\d\.-]/g, '')).toFixed(digits));
  let l = values.split('.')[0].split('').reverse();
  let r = values.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + '.' + r;
};