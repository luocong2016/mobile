import _ from 'lodash'
import {Notify} from 'vant'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({showSpinner: false})
import store from '@/store'
import router from '@/router'
import {getToken} from '@/utils/auth'

const whiteList = ['/login', '/register', '/404']
const isWhiteList = path => whiteList.some(item => (_.isRegExp(item) ? item.test(path) : item === path))

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({path: '/'})
      /// hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
      NProgress.done()
    } else {
      // 获取用户信息
      const lackGetUserInfo = _.isEmpty(store.getters.userData)
      if (!lackGetUserInfo) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // 清除用户信息，退出登录，跳转登录页
          store.commit('user/LOGOUT')
          Notify.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (isWhiteList(to.path)) {
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
