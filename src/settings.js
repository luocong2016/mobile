// 打包后的配置更改
const port = process.env.port || process.env.npm_config_port || 8888

module.exports = {
  port,
  baseURL: '/mock-api', // axios baseURL
  tokenKey: 'Token', // token key
  storage: 'sessionStorage', // window.localStorage or window.sessionStorage
  mock: true, // need mock
  vconsole: false, // hybrid App 开发调试工具
  whiteList: ['/login', '/register', '/404'], // vue-router
  proxy: {
    '/mock-api': {
      target: `http://localhost:${port}`, // target host
      ws: false, // proxy websockets
      secure: false, // if you want to verify the SSL Certs
      changeOrigin: true // changes the origin of the host header to the target URL
      // pathRewrite: {'^/api': ''}
    }
  }
}
