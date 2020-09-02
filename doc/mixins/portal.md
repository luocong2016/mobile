## 将元素挂载到指定元素上
### 语法
> 提供 `portal` 方法
```
/*
args
  ref 子容器中的 $refs 指定容器
  afterPortal 挂载之后执行
props
  getContainer 挂载到指定的父容器
*/

{
  // ...
  props: {
    getContainer: [String, Function]
  },
  watch: {
    getContainer: 'portal'
  },
  methods: {
    portal() {
      // ...
    }
  },
  mounted() {
    // ...
  }
}
```

### demo
```
<template>
  <div class="home page">
    <div ref="container">
      测试容器
    </div>
    <div>---华丽丽的分界线---</div>
    <child :getContainer="() => $refs.container" />
  </div>
</template>
<script>
import {PortalMixin} from '@/mixins/portal'
const Child = {
  name: 'child',
  template: `<div>children</div>`,
  mixins: [PortalMixin()]
}
export default {
  name: 'PortalMixinDemo',
  components: {Child}
}
</script>
```

### demo
```
<template>
  <div class="home page">
    <div ref="container">
      测试容器
    </div>
    <div>---华丽丽的分界线---</div>
    <child :getContainer="() => $refs.container" />
  </div>
</template>
<script>
import {PortalMixin} from '@/mixins/portal'
const Child = {
  name: 'child',
  template: `<div>
    children
    <div ref="child">ref="child"</div>
    <slot />
  </div>`,
  mixins: [
    PortalMixin({
      ref: 'child',
      afterPortal: function() {
        console.log(this)
      }
    })
  ]
}
export default {
  name: 'PortalMixinDemo',
  components: {Child}
}
</script>

<style lang="less" scope></style>
```