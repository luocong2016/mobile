const path = require('path')
const {generateTheme} = require('vant-theme-generator')

const resolve = p => path.join(__dirname, p)

const options = {
  antDir: resolve('./node_modules/vant'),
  stylesDir: resolve('./src'),
  varFile: resolve('./src/styles/var.less'),
  themeVariables: ['@button-primary-background-color'],
  outputFilePath: resolve('./public/color.less'),
  customColorRegexArray: [/^fade\(.*\)$/]
}

generateTheme(options)
  .then(less => {
    console.log('Theme generated successfully', less)
  })
  .catch(error => {
    console.log('Error', error)
  })
