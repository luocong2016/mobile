import {Toast} from 'vant'
import {resetRouter} from '@/router'
import {storage} from '@/settings'
import {login, logout, getInfo} from '@/api/user'
import {getToken, setToken, removeToken} from '@/utils/auth'

const AWAIT = 1250
const USER_DATA = 'USER_DATA'
const storages = window[storage] // if 浏览器禁用缓存，会报错

export default {
  namespaced: true,
  state: {
    token: getToken(),
    user: JSON.parse(storages.getItem(USER_DATA) || null)
  },
  mutations: {
    LOGIN(state, data) {
      const userToken = data
      state.token = userToken
      setToken(userToken)
    },
    LOGOUT(state) {
      state.user = null
      state.token = null
      removeToken()
      storages.removeItem(USER_DATA)
      resetRouter()
      Toast({
        message: '退出成功',
        position: 'middle',
        duration: AWAIT
      })
    },
    SET_USER_DATA(state, data) {
      state.user = data
      storages.setItem(USER_DATA, JSON.stringify(data) || null)
    }
  },
  actions: {
    login(state, data = {}) {
      const {username, password, $route, $router} = data
      login({username, password}).then(response => {
        state.commit('LOGIN', response)
        Toast({
          message: '登录成功',
          position: 'middle',
          duration: AWAIT
        })
        setTimeout(() => {
          const redirect = $route.query.redirect || '/'
          $router.replace({path: redirect})
        }, AWAIT)
      })
    },
    logout({commit}) {
      logout().then(() => {
        commit('LOGOUT')
      })
    },
    getInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo({token: state.token})
          .then(data => {
            if (!data) {
              reject('获取用户信息错误！')
            }
            commit('SET_USER_DATA', data)
            resolve(data)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    token({token}) {
      return token
    },
    user({user}) {
      return user
    }
  }
}
