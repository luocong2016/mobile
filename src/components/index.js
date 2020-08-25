import Vue from 'vue'
import {camelize} from '@/utils/format/string'
const components = {}

// 注册到全局
Object.keys(components).forEach(cmp => {
  const component = components[cmp]
  Vue.component(camelize(`-${component.componentName || component.name}`), component)
})
