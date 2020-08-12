/* 封装 */
import axios from 'axios'
import {Toast, Dialog} from 'vant'
// import store from '@/store'
import {resetRouter} from '@/router'
import {baseURL} from '@/settings'

// create an axios instance
const service = axios.create({
  baseURL,
  // withCredentials: true,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.showLoading) {
      Toast.loading({message: config.showLoadingText || '加载中...', forbidClick: true})
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    /* 格式 { data: any, code: stirng|number, msg: string } */
    if (response.data && response.data.code) {
      if (response.data.code == 200) {
        return response.config.custom ? response.config.custom(response) : response.data.data
      } else if (response.data.code == 401) {
        Dialog.confirm({
          title: '警告',
          message: '登录异常,请重新登录',
          confirmButtonText: '重新登录'
        }).then(() => {
          console.log(response.config)
          resetRouter()
        })
        return Promise.reject(response.data.msg)
      } else {
        !response.config.hideFail && Toast.fail({icon: 'cross', message: response.data.msg, duration: 1.25 * 1000})
        return Promise.reject(response.data.msg)
      }
    }

    return response
  },
  error => {
    console.log(`[Error]: ${new Date()} ${error}.`)
    Toast.fail({
      icon: 'cross',
      message: error.message,
      duration: 1.25 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
