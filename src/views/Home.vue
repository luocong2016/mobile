<template>
  <div class="home page">
    <navSwipe />
    <van-row>
      <van-col span="4">span: 4</van-col>
      <van-col>offset: 4, span: 10</van-col>
    </van-row>

    <van-button type="primary" @click="onClick">主要按钮1</van-button>
  </div>
</template>

<script>
import NavSwipe from '@/components/NavSwipe/index'
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {NavSwipe},
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    onClick() {
      this.logout()
    },
    onSpeak() {
      console.log(1)
    }
  }
}
</script>

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
