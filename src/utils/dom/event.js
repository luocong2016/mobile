import {isServer} from '..'

export let supportsPassive = false

if (!isServer) {
  try {
    const opts = {}
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get() {
        /* istanbul ignore next */
        supportsPassive = true
      }
    })
    window.addEventListener('test-passive', null, opts)
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

/**
 * 绑定事件
 *
 * @export
 * @param {EventTarget} target
 * @param {string} event
 * @param {EventHandler} handler
 * @param {boolean} [passive=false] passive 属性
 */
export function on(target, event, handler, passive = false) {
  if (!isServer) {
    target.addEventListener(event, handler, supportsPassive ? {capture: false, passive} : false)
  }
}

/**
 * 移除绑定事件
 *
 * @export
 * @param {EventTarget} target DOM | document | window
 * @param {event} string 事件名称
 * @param {EventHandler} handler 事件函数
 */
export function off(target, event, handler) {
  if (!isServer) {
    target.removeEventListener(event, handler)
  }
}

/**
 * 阻止冒泡
 *
 * @export
 * @param {Event} event
 */
export function stopPropagation(event) {
  event.stopPropagation()
}

/**
 * 阻止默认事件、阻止冒泡(可选)
 *
 * @export
 * @param {Event} event
 * @param {boolean} isStopPropagation
 */
export function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event)
  }
}
