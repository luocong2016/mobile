// const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const settings = require('./src/settings')
// const resolve = dir => path.join(__dirname, dir)
const isPro = process.env.NODE_ENV === 'production'
const port = process.env.port || process.env.npm_config_port || 8888

module.exports = {
  devServer: {
    port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [settings.baseURL]: {
        target: `http://localhost:${port}`, // target host
        ws: false, // proxy websockets
        secure: false, // if you want to verify the SSL Certs
        changeOrigin: true // changes the origin of the host header to the target URL
        // pathRewrite: {'^/api': ''}
      }
    },
    before: settings.mock ? require('./mock/mock-server') : null
  },
  css: {
    extract: isPro,
    sourceMap: false,
    loaderOptions: {
      // less: {
      //   lessOptions: {
      //     modifyVars: {
      //       hack: `true; @import "${resolve('./src/styles/var.less')}";`
      //     }
      //   }
      // },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
}
