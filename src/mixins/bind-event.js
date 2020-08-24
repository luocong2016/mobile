import {on, off} from '@/utils/dom/event'

let uid = 0
export function BindEventMixin(hander) {
  const key = `binded_${uid}`
  function bind() {
    if (!this[key]) {
      hander.call(this, on, true)
      this[key] = true
    }
  }
  function unbind() {
    if (this[key]) {
      hander.call(this, off, false)
      this[key] = false
    }
  }
  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  }
}
