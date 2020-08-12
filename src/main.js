import 'amfe-flexible'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import settings from './settings'

import './styles'
import './filters'
import './directives'
import './plugins'
import './components'
// import './utils/permission'

Vue.config.productionTip = false

// 一段神器的代码，用来阻止 chrome 弹框
document.getElementsByTagName('body')[0].addEventListener('contextmenu', function(e) {
  e.preventDefault()
})

// mock 是否打包使用
if (settings.mock && process.env.NODE_ENV === 'production') {
  const {mockXHR} = require('../mock')
  mockXHR()
}

// hybrid App 调试工具
if (settings.vconsole) {
  const VConsole = require('vconsole')
  new VConsole()
}

// 浏览器映射调试
// window.$lutz$ = settings

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
