<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form" :model="loginForm" :rules="loginRules" label-position="left">
      <div class="title-container">
        <h3 class="title">ログイン</h3>
      </div>

      <el-form-item prop="username">
        <!-- <span class="svg-container">
          <svg-icon icon-class="user" />
        </span> -->
        <el-input
          ref="username"
          v-model="loginForm.username"
          prefix-icon="el-icon-user"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input
          ref="password"
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          placeholder="Password"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.enter.native="handleLogin"
        />
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span> -->
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          { required: true, message: 'Usernameを入力してください', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Passwordを入力してください', trigger: 'blur' }
        ],
      },
      loading: false,

    }
  },

  computed: {

  },

  mounted() {
    this.$refs.username.focus()
  },

  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('auth/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: '/', query: {} })
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
      
    }
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  min-height: 100%;

  .login-form {
    position: relative;
    width: 400px;
    margin: 0 auto;
    padding-top: 150px;
  }

  .title-container {
    position: relative;
    
    .title {
      font-size: 26px;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>