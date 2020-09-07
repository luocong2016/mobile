```vue
<template>
  <div class="info-demo">
    <span>测试数据<Info dot/></span>
    <span>测试数据<Info info="1"/></span>
    <span>测试数据<Info :info="999"/></span>
  </div>
</template>

<style lang="less" scope>
.info-demo {
  span {
    position: relative;
  }
  span + span {
    margin-left: 20px;
  }
}
</style>
```