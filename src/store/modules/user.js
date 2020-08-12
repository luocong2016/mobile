import {Toast} from 'vant'
import {resetRouter} from '@/router'
import {storage} from '@/settings'
import {login, getInfo} from '@/api/user'
import {getToken, setToken, removeToken} from '@/utils/auth'

const AWAIT = 1250
const USER_DATA = 'USER_DATA'

export default {
  namespaced: true,
  state: {
    token: getToken(),
    user: JSON.parse(storage.getItem(USER_DATA) || null)
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
      storage.removeItem(USER_DATA)
      resetRouter()
    },
    SET_USER_DATA(state, data) {
      state.user = data
      storage.setItem(USER_DATA, JSON.stringify(data) || null)
    }
  },
  actions: {
    async login(state, data = {}) {
      const {phoneNumber, password, $route, $router} = data
      const response = await login({phoneNumber, password})
      state.commit('LOGIN', response.data)
      Toast({
        message: '登录成功',
        position: 'middle',
        duration: AWAIT
      })
      setTimeout(() => {
        const redirect = $route.query.redirect || '/'
        $router.replace({path: redirect})
      }, AWAIT)
    },
    getInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then(response => {
            const {data} = response
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
