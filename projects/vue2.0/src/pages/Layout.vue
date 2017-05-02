<template>
  <div class="layout">
    <div class="header">
      <div class="header-inner">
        <router-link :to="{path:'/'}">
          <img src="../assets/logo.png" alt="index" class="logo">
        </router-link>
        <ul class="header-right">
          <li v-if="notLogin"><a @click="openDialog">登录</a>|</li>
          <template v-else>
            <li><a>你好，{{username}}</a>|</li>
            <li><a @click="quit">退出</a>|</li>
          </template>
          <li><a @click="openAbout">关于</a></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">
      <p class="copyright">&copy; 2016 lu MIT</p>
    </div>
    <my-dialog :is-show="isShowLogDialog" @close="close('isShowLogDialog')">
      <login @login="login"></login>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog" @close="close('isShowAboutDialog')">
      <p class="about">
        PC practice for vue2.0
      </p>
    </my-dialog>
  </div>
</template>

<script>
  import myDialog from '@/components/base/Dialog'
  import login from '@/components/login'

  export default {
    components: {
      myDialog,
      login
    },
    data () {
      return {
        isShowLogDialog: false,
        isShowAboutDialog: false,
        username: '',
        notLogin: true
      }
    },
    methods: {
      openDialog () {
        this.isShowLogDialog = true
      },
      openAbout () {
        this.isShowAboutDialog = true
      },
      close (attr) {
        this[attr] = false
      },
      login (name) {
        this.close('isShowLogDialog')
        this.username = name
        this.notLogin = false
      },
      quit () {
        this.notLogin = true
        this.username = ''
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin:0;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:link,a:active,a:visited {
    color: #333;
  }
  ul {
    list-style: none;
  }
  img {
    vertical-align: middle;
  }
  html,body {
    height: 100%;
    font-family: "microsoft YaHei";
  }
  .layout {
    min-height: 100%;
    position: relative;
    background-color: #f2f2f2;
  }
  .header {
    background-color: #333;
    height: 60px;
    line-height: 60px;
  }
  .header ul {
    margin-right: -5px;
  }
  .header li {
    color: #aaa;
    margin-right: 10px;
    font-size: 13px;
  }
  .header a {
    font-size: 14px;
    margin-right: 10px;
  }
  .header a:link,
  .header a:active,
  .header a:visited {
    color: #aaa;
  }
  .header-inner {
    width: 1200px;
    margin: 0 auto;
    clear: both;
    overflow: hidden;
    color: #fff;
  }
  .header-inner img {
    width: 50px;
    height: 50px;
    float: left;
    margin-top: 5px;
  }
  .header-inner ul {
    float: right;
    list-style: none;
  }
  .header-inner ul li {
    float: left;
  }
  .container {
    width: 1200px;
    min-height: 100%;
    margin: 0 auto;    
    padding-bottom: 70px;
    clear: both;
    overflow: hidden;
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #ddd;
    text-align: center;
  }
  .about {
    margin-top: 80px;
    text-align: center;
  }
</style>
