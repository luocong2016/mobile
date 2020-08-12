/// https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md
/// https://www.lodashjs.com/

import dayjs from 'dayjs'
import _ from 'lodash'
/**
 * 时间格式化
 *
 * @export
 * @param {number|string} date
 * @param {string|object} [options={}]
 * @returns {string}
 * @example
 * ```js
 * formatDate('20200715152546') // 2020-07-15 15:04:24
 * formatDate(1594796664071) // 2020-07-15 15:04:24
 * formatDate('1594796664071', { transform: val => +val }) // 2020-07-15 15:25:46
 * formatDate('20200715', 'YYYY-MM-DD') // 2020-07-15
 * ```
 */
export function formatDate(date, options = {}) {
  let opt = {
    format: 'YYYY-MM-DD HH:mm:ss',
    placeholder: '-',
    failPlaceHolder: '-',
    transform: null
  }
  if (_.isString(options)) {
    opt.format = options
  } else if (_.isPlainObject(options)) {
    opt = {...opt, ...options}
  }
  if (!date) {
    return opt.placeholder
  }
  if (_.isFunction(opt.transform)) {
    date = opt.transform(date)
  }
  const moment = dayjs(date)
  if (moment.toString() === 'Invalid date') {
    return opt.failPlaceHolder
  }
  return moment.format(opt.format)
}
