## 自动构建
1. 兼容 import `export` 或者 require `module.export`
2. install 属性将自动注册到全局

### test
```javascript
import {formatDate} from '@/utils/format/date'

export default {
  install(Vue) {
    Vue.filter('formatDate', formatDate)
  }
}
```