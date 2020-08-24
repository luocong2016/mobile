/**
 * 删除本 DOM 节点
 *
 * @export
 * @param {Node} el
 */
export function removeNode(el) {
  const parent = el.parentNode
  if (parent) {
    parent.removeChild(el)
  }
}
