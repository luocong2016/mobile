import {formatDate} from '@/utils/format/date'

/* 时间格式化
 * ```vue
 * <!-- <span>2020-07-15 15:04:24</span> -->
 * <span>{{ 20200715152546 | formatDate }}</span>
 * <span>{{ '20200715152546' | formatDate }}</span>
 * <span>{{ '1594796664071' | formatDate({ transform: val => +val }) }}</span>
 * <span>{{ '20200715' | formatDate('YYYY-MM-DD') }}</span>
 * ```
 */
export default {
  install(Vue) {
    Vue.filter('formatDate', formatDate)
  }
}
