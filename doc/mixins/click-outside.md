## 点击元素外部触发事件
### 语法
```
props: {
  closeOnClickOutside: {
    type: Boolean,
    default: true
  },
  data() {
    return { clickOutsideHandler: fn }
  },
  mounted() {
    // ...
  },
  beforeDestroy() {
    // ...
  }
```

### demo
```vue
<template>
  <div class="page">
    <van-button plain type="primary" @click="onClick">测试按钮</van-button>
  </div>
</template>
<script>
import {ClickOutsideMixin} from '@/mixins/click-outside'
export default {
  name: 'ClickOutsideMixinDemo',
  mixins: [ClickOutsideMixin({event: 'click', method: 'onClickOutside'})],
  methods: {
    onClickOutside(e) {
      console.log('onClickOutside:', e)
    },
    onClick(e) {
      e.stopPropagation()
      console.log('测试按钮')
    }
  }
}
</script>
<style lang="less" scope>
.page {
  width: 100%;
  height: 100%;
}
</style>
```