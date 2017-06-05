<template>
  <div class="login">
    <div class="logo">
      <router-link to='/'>
        <img src="../../assets/img/logo.png" alt="">
      </router-link>
    </div>

    <div class="content">
      <form  class="login-form">
        <h3 class="form-title">登录</h3>
        <div class="alert alert-danger" :class="{'hide': msghide}">
          <span>
            请输入用户名和密码
          </span>
        </div>
        	<div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">用户名</label>
            <input class="form-control form-control-solid placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名" name="username" v-model="loginForm.account"/>
          </div>
          <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">密码</label>
            <input class="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="密码" name="password" v-model="loginForm.checkPass"/>
          </div>
          <div class="form-actions">
            <button type="button" @click="handleSubmit" class="btn btn-success uppercase">登录</button>
            <label class="rememberme check">
            <input type="checkbox" checked name="remember" value="1"/>记住</label>
            <!--
            <a href="javascript:;" id="forget-password" class="forget-password">忘记密码</a>
            -->
          </div>
          <!--
          <div class="login-options">
            <ul class="social-icons">
              <li>
                <a class="ctrip" data-original-title="ctrip" href="#">携程账号登录</a>
              </li>
            </ul>
          </div>
          <div class="create-account">
            <p>
              <a href="javascript:;" id="register-btn" class="uppercase">注册</a>
            </p>
          </div>
          -->
      </form>
    </div>
    <div class="copyright">
       2017 &copy; skysea.
    </div>


  </div>
</template>
<script>
  import { reqLogin } from './api';

  export default {
    name: 'login-page',
    data() {
      return {
        msghide: true,
        loginForm: {
          account: 'admin',
          checkPass: '123456',
        },
        checked: true,
      };
    },
    methods: {
      valid() {
        // 简单验证是否为空
        if (!this.loginForm.account || !this.loginForm.checkPass) {
          this.msghide = false;
          return false;
        }
        this.msghide = true;
        return true;
      },
      handleSubmit() {
        const valid = this.valid();
        if (valid) {
          const loginParams = {
            username: this.loginForm.account,
            password: this.loginForm.checkPass,
          };

          // 发送请求
          reqLogin(loginParams).then((data) => {
            const { msg, code, user } = data;

            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error',
              });
            } else {
              sessionStorage.setItem('user', JSON.stringify(user));
              this.$router.push({ path: '/' });
            }
          });
        }
      },
    },
  };
</script>
<style lang="scss">
  @import '../../scss/pages/login.scss';
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
</style>
