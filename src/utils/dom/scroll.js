const isWindow = val => val === window

const overflowScrollReg = /scroll|auto/i

/**
 * 获取最近一个滚动轴元素
 * get nearest scroll element
 * http://w3help.org/zh-cn/causes/SD9013
 * http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
 *
 * @export
 * @param {HTMLElement} el
 * @param {HTMLElement | Window} [root=window]
 * @returns {HTMLElement}
 */
export function getScroller(el, root = window) {
  let node = el
  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== root) {
    const {overflowY} = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node
      }
      // see: https://github.com/youzan/vant/issues/3823
      const {overflowY: htmlOverflowY} = window.getComputedStyle(node.parentNode)
      if (overflowScrollReg.test(htmlOverflowY)) {
        return node
      }
    }
    node = node.parentNode
  }
  return root
}

/**
 * 获取元素的内容垂直滚动的像素数
 *
 * @export
 * @param {HTMLElement | Window} el
 * @returns {number}
 */
export function getScrollTop(el) {
  const top = Reflect.has(el, 'scrollTop') ? el.scrollTop : el.pageXOffset
  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}

/**
 * 设置元素的内容垂直滚动的像素数
 *
 * @export
 * @param {HTMLElement | Window} el
 * @param {number} value
 */
export function setScrollTop(el, value) {
  if (Reflect.has(el, 'scrollTop')) {
    el.scrollTop = value
  } else {
    el.scrollTo(el.scrollX, value)
  }
}

/**
 * 获取根元素距顶部的像素数
 *
 * @export
 * @returns {number}
 */
export function getRootScrollTop() {
  return window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

/**
 * 设置根元素距顶部的像素数
 *
 * @export
 * @param {number} value
 */
export function setRootScrollTop(value) {
  setScrollTop(window, value)
  setScrollTop(document.body, value)
}

/**
 * 获取元素到顶部的距离
 *
 * @export
 * @param {HTMLElement | Window} el
 * @param {HTMLElement} scroller
 * @returns {number}
 */
export function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0
  }
  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop()
  return el.getBoundingClientRect().top + scrollTop
}

/**
 * 获取元素视窗上有效高度
 *
 * @export
 * @param {HTMLElement | Window} el
 * @returns
 */
export function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight
  }
  return el.getBoundingClientRect().height
}

/**
 * 获取元素上边到视窗上边的距离
 *
 * @export
 * @param {HTMLElement | Window} el
 * @returns {number}
 */
export function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0
  }
  return el.getBoundingClientRect().top
}
