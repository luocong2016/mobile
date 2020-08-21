const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const settings = require('./src/settings')
const resolve = dir => path.join(__dirname, dir)
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

  chainWebpack(config) {
    // set svg-sprite-loader
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()

    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        vant: {
          name: 'chunk-vantUI', // split vantUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'), // can customize your rules
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true
        }
      }
    })
    config.optimization.runtimeChunk('single')
  },

  css: {
    extract: isPro,
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${resolve('./src/styles/var.less')}";`
          }
        }
      },
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
  },

  publicPath: '',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
}
