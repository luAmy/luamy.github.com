<template>
  <div>
    <ul class="form">
      <li>
        <p class="text">用户名：</p>
        <input type="text" name="username" v-model.trim="username" placeholder="请输入用户名"/>
        <span class="note" v-if="isLogin">{{getUsername.error}}</span>
      </li>
      <li>
        <p class="text">密码：</p>
        <input type="password" name="password" v-model="password" placeholder="请输入密码">
        <span class="note" v-if="isLogin">{{getPass.error}}</span>
      </li>
      <li class="login">
        <a class="btn" @click="loginRequst">登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        isLogin: false
      }
    },
    computed: {
      getUsername () {
        let status = true
        let error = ''

        if (this.username === '') {
          status = false
          error = '用户名不能为空'
        }
        this.nameError = error
        return {
          status,
          error
        }
      },
      getPass () {
        let status = true
        let error = ''

        if (this.password === '') {
          status = false
          error = '密码不能为空'
        }
        this.passError = error
        return {
          status,
          error
        }
      }
    },
    methods: {
      loginRequst () {
        if (this.getUsername.status && this.getPass.status) {
          this.$http.get('/static/db.json').then(res => {
            let name = res.body.login.username
            this.$emit('login', name)
          })
        } else {
          this.isLogin = true
        }
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 16px;
    display: inline-block;
    width: 100px;
  }
  ul li {
    margin: 30px 20px;
  }
  input {
    border: 1px solid #ddd;
    width: 180px;
    height: 30px;
    padding-left: 10px;
    vertical-align: middle;
  }
  .login .btn {
    display: inline-block;
    margin-left: 105px;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #4FC08D;
    color: #fff;
    font-size: 14px;
  }
  .note {
    margin-left: 5px;
    font-size: 12px;
    color: #f00;
  }
</style>
