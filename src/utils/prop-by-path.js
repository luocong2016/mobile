/** vue $set 封装
 * @param {object|array} obj
 * @param {string} path
 * @param {boolean} strict
 *
 * @returns {k: string, b: string|array, v: any}
 *
 * @desc
 * ```js
 * const arr = [{a: [{b: 1}]}]
 * getPropByPath(arr, 'a.0.b') // {k: 'a', o: [{a: [{b: 1}]}], v: undefined}
 * getPropByPath(arr, 'a.0.b', true) // 路径报错
 * getPropByPath(arr, '0.a.0.b') // {k: 'b', o: {b: 1}, v: 1}
 * ```
 *
 * ```vue
 * const fielData = getPropByPath(this.form, this.pickerKey)
 * this.$set(fielData.o, fielData.k, item.value)
 * ```
 */
export function getPropByPath(obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
}
