import Vue from 'vue'

const filters = require.context('./', false, /\.js$/)

filters.keys().forEach(file => {
  if (file.startsWith('./index')) {
    return
  }
  let filter = filters(file)
  /* 兼容 import export 和 require module.export */
  filter = filter.default || filter
  if (filter.install) {
    Vue.use(filter)
  }
})
