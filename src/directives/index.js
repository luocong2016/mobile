import Vue from 'vue'

const directives = require.context('./', false, /\.js$/)

directives.keys().forEach(file => {
  if (file.startsWith('./index')) {
    return
  }
  let directive = directives(file)
  /* 兼容 import export 和 require module.export */
  directive = directive.default || directive
  if (directive.install) {
    Vue.use(directive.install)
  }
})
