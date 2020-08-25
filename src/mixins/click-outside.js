import {on, off} from '@/utils/dom/event'

export const ClickOutsideMixin = config => ({
  props: {
    closeOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const vm = this
    const clickOutsideHandler = event => {
      if (vm.closeOnClickOutside /*&& !vm.$el.contains(event.target)*/) {
        vm[config.method](event)
      }
    }
    return {clickOutsideHandler}
  },
  mounted() {
    on(document, config.event, this.clickOutsideHandler)
  },
  beforeDestroy() {
    off(document, config.event, this.clickOutsideHandler)
  }
})
