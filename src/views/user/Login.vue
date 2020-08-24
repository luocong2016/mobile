<template>
  <div class="login">
    <div class="login__header">
      <div class="login__header--logo">
        <img src="@/assets/logo.png" alt="default_logo" />
      </div>
    </div>

    <div class="login__content">
      <van-field placeholder="手机号码/帐号" v-model="username" left-icon="user-o" :error-message="usernameError" />
      <van-field
        v-if="loginWay === 'password'"
        placeholder="登录密码"
        v-model="password"
        left-icon="lock"
        :type="passwordType"
      >
        <van-icon slot="right-icon" @click="switchPasswordType" :name="passwordIcon" />
      </van-field>

      <van-field v-else placeholder="短信验证码" v-model="password" left-icon="comment-o" type="text">
        <verification-code slot="button" @sendVerifyCode="sendVerifyCode" />
      </van-field>

      <div class="button-wrap">
        <van-button size="large" @click="handleLogin" type="info">登录</van-button>
      </div>

      <div class="more-wrap">
        <router-link class="link" to="/register">没有账号？去注册</router-link>
        <div class="switch-way" @click="switchLoginWay">{{ loginWayObj.toggleMsg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import VerificationCode from '@/components/VerificationCode'
export default {
  name: 'Login',
  components: {VerificationCode},
  data() {
    return {
      username: '18650000000',
      password: '123456',
      code: '',
      loginWay: 'password',
      passwordType: 'password',
      usernameError: ''
    }
  },
  computed: {
    loginWayObj() {
      return this.loginWay === 'password'
        ? {
            icon: 'closed-eye',
            toggleMsg: '验证码登录'
          }
        : {
            icon: 'eye',
            toggleMsg: '密码登录'
          }
    },
    passwordIcon() {
      return this.passwordType === 'password' ? 'closed-eye' : 'eye'
    }
  },
  methods: {
    ...mapActions({
      login: 'user/login'
    }),
    switchPasswordType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    sendVerifyCode() {
      this.usernameError = ''
      if (!this.username) {
        this.usernameError = '手机号码必填'
      }
    },
    handleLogin() {
      const data = {
        username: this.username,
        password: this.password,
        $router: this.$router,
        $route: this.$route
      }
      this.login(data)
    },
    switchLoginWay() {
      this.password = this.code = ''
      this.loginWay = this.loginWay === 'password' ? 'verifyCode' : 'password'
    }
  }
}
</script>

<style lang="less" scope>
.login {
  &__header {
    width: 100%;
    height: 165px;
    display: flex;
    justify-content: center;
    align-items: center;
    &--logo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }

  &__content {
    width: 100%;
    height: auto;
    padding: 0 15px;
    box-sizing: border-box;
    .button-wrap {
      width: 100%;
      height: auto;
      margin-top: 15px;
    }
    .more-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      font-size: 14px;
    }
  }
}
</style>
