## provide / inject

### demo
```
<template>
  <div class="home page">
    <t-row>
      <t-col>1</t-col>
      <t-col>2</t-col>
    </t-row>
  </div>
</template>
<script>
import {ChildrenMixin, ParentMixin} from '@/mixins/relation'
const tRow = {
  name: 'tRow',
  mixins: [ParentMixin('row')],
  template: `<div> row <slot /></div>`,
  created() {
    console.log(this)
  }
}
const tCol = {
  name: 'tCol',
  mixins: [ChildrenMixin('row')],
  template: `<div><slot /></div>`,
  mounted() {
    console.log('child:', this)
  }
}
export default {
  name: 'PortalMixinDemo',
  components: {tRow, tCol}
}
</script>
<style lang="less" scope></style>
```