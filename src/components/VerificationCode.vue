<template>
  <van-button
    class="verificationCode"
    size="mini"
    type="primary"
    native-type="button"
    :disabled="!!codeRestTime"
    @click="btnClick"
  >
    {{ codeRestTime ? `${codeRestTime}S` : '发送验证码' }}
  </van-button>
</template>

<script>
export default {
  name: 'VerificationCode',
  props: {
    btnMsg: {
      type: String,
      default: '发送验证码'
    },
    restTime: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      codeRestTime: 0
    }
  },
  methods: {
    btnClick() {
      this.codeRestTime = this.restTime
      let timer = setInterval(() => {
        --this.codeRestTime
        if (!this.codeRestTime) {
          clearInterval(timer)
          timer = null
        }
      }, 1000)
      this.$emit('sendVerifyCode')
    }
  }
}
</script>

<style lang="less" scoped>
.verificationCode {
  padding: 0 5px;
  min-width: 6.5em;
}
</style>
