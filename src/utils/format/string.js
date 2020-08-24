const camelizeRE = /-(\w)/g

/**
 * 将 `-` 转换成大写字母
 * @demo camelize('lutz-test') => lutzTest
 * @export
 * @param {string} str
 * @returns {string}
 */
export function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}
