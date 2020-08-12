import Vue from 'vue'
const components = {}

// 注册到全局
Object.keys(components).forEach(cmp => {
  const component = components[cmp]
  Vue.component(component.componentName || component.name, component)
})
