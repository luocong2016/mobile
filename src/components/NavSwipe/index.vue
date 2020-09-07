<template>
  <div class="nav-swipe">
    <div class="nav-swipe__nav">
      <div class="nav-swipe__wrap">
        <s-title title="测试" />
        <s-title title="测试" dot />
        <s-title title="测试" :info="2" />
        <s-title title="测试" disabled />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
        <s-title title="测试" />
      </div>
    </div>
    <van-icon name="newspaper-o" />
  </div>
</template>

<script>
import STitle from './Title'
export default {
  name: 'NavSwipe',
  components: {STitle},
  props: {
    data: Array,
    diasbled: Boolean,
    sticky: Boolean,
    titleClass: String,
    titleStyle: Object,
    type: {
      type: String,
      validator: value => ['line', 'card'].indexOf(value) !== -1,
      default: 'line'
    }
  },
  data() {
    return {
      active: ''
    }
  }
}
</script>

<style lang="less" scope>
.nav-swipe {
  position: relative;
  padding: 0 3px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  box-sizing: content-box;
  cursor: pointer;
  font-size: 16px;
  &__tab {
    & + & {
      padding: 12px 0;
      margin: 0 0 0 16px;
    }
    display: inline-block;
    cursor: pointer;
  }
  &__nav {
    flex: 1;
    padding-right: 3px;
    overflow: hidden;
  }
  &__wrap {
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
  }
  &__list {
    height: 100%;
    box-sizing: content-box;
  }
  &__text-wrapper {
    position: relative;
  }
}
.nav-swipe__wrap::-webkit-scrollbar {
  display: none;
}
</style>
