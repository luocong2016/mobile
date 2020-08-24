<template>
  <div class="home page">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      :head-height="80"
      style="height: 100%; position: relative;"
    >
      <template #normal>
        <div>normal</div>
      </template>

      <template #pulling="props">
        <img
          class="doge"
          src="https://img.yzcdn.cn/vant/doge.png"
          :style="{transform: `scale(${props.distance / 80})`}"
        />
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
      </template>

      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        this.count++
      }, 1500)
    }
  }
}
</script>

<style lang="less">
.doge {
  width: 140px;
  height: 75px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>
