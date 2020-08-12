// 打包后的配置更改
module.exports = {
  baseURL: '/mock-api', // axios baseURL
  tokenKey: 'Token', // token key
  storage: 'sessionStorage', // window.localStorage or window.sessionStorage
  mock: true, // need mock
  vconsole: true // hybrid App 开发调试工具
}
