import {formatDate} from '@/utils/format/date'

export default {
  install(Vue) {
    Vue.filter('formatDate', formatDate)
  }
}
