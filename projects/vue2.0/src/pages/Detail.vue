<template>
  <div class="detail-container">
    <div class="detail-left">
      <img :src="icon" :alt="icon">
      <ul class="list">
        <li v-for="order in orderList">
          <router-link :to="'/detail/'+order.url">
            {{order.product}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>  
</template>

<script>
  import Vue from 'vue'
  import resource from 'vue-resource'

  Vue.use(resource)

  export default {
    data () {
      return {
        iconMap: {
          '/detail/statistics': require('@/assets/imgs/1.png'),
          '/detail/predict': require('@/assets/imgs/2.png'),
          '/detail/analysis': require('@/assets/imgs/3.png'),
          '/detail/ad': require('@/assets/imgs/4.png')
        },
        orderList: []
      }
    },
    computed: {
      icon () {
        return this.iconMap[this.$route.path]
      }
    },
    created () {
      this.$http.get('/static/db.json').then(res => {
        this.orderList = res.body.getOrderList.list

        let orderUrls = ['statistics', 'predict', 'analysis', 'ad']
        for (let i = 0; i < this.orderList.length; i++) {
          this.orderList[i].url = orderUrls[i]
        }
      })
    }
  }
</script>

<style>
  .detail-container {
    margin: 15px;
    clear: both;
    overflow: hidden;
  }
  .detail-left {
    float: left;
    width: 200px;
    margin-right: 15px;
    text-align: center;
    background-color: #fff;
    overflow: hidden;
  }
  .detail-right {
    float: left;
    width: 920px;
    padding: 0 15px;
  }
  .detail-left img {
    margin: 20px 0;
  }
  .detail-left ul {
    padding-bottom: 20px;
  }
  .detail-left li {
    font-size: 13px;
    text-align: left;
  }
  .detail-left li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 8px 15px;
  }
  .detail-left li .router-link-active,
  .detail-left li a:hover {
    background-color: #4FC08D;
    color: #fff;
  }

  .content-top,.content-bottom {
    background-color: #fff;
    width: 100%;
    padding: 15px;
  }
  .content-top {
    margin-bottom: 15px;
  }
  .content-top h1,.content-bottom h1{
    font-size: 18px;
    font-weight: normal;
  }
  .detail-blue {
    margin: 20px -15px;
    padding: 15px;
    color: #888;
    font-size: 14px;
    background-color: #F7FCFF;
    line-height: 1.6;
  }
  .spec>div{
    height: 26px;
    margin-bottom: 20px;
  }
  .spec-left,.spec-right {
    display: inline-block;
    font-size: 13px;
  }
  .spec-left {
    width: 110px;
  }
  .spec-right {
    margin-top: 2px;
  }
  .buy-now {
    display: inline-block;
    padding: 8px 16px;
    background-color: #4FC08D;
    color: #fff;
  }
  .buy-now:hover,.btn:hover {
    color: #fff
  }
  .content-bottom .body {
    width: 99%;
    font-size: 14px;
  }
  .main-desc {
    margin: 20px 0;
  }
  .content-bottom .body p {
    margin-top: 20px;
    line-height: 1.8;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .content-bottom table tr,table td {
    border: 1px solid #eee;
  }
  .content-bottom table td {
    padding: 12px 10px;
  }

  .paylist {
    margin: 10px;
    width: 94%;
    font-size: 14px;
    text-align: center;
  }
  .paylist th {
    background-color: #4FC08D;
    color: #fff;
  }
  .paylist th td {
    border:none;
  }
  .paylist td,.paylist th {
    padding: 5px 10px;
  }
  .bank {
    margin-left: 5px;
    margin-bottom: 20px;
  }
  .bank-head {
    font-size: 14px;
    margin:10px 8px;
  }
  .btn {
    display: inline-block;
    padding: 8px 15px;
    background-color: #4FC08D;
    color: #fff;
    font-size: 14px;
  }
  .confirm {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  p.ask {
    font-size: 14px;
    margin-top: 30px;
    margin-left: 20px;
  }
  p.ask .btn {
    margin-left: 10px;
  }
  p.success {
    font-size: 14px;
    margin: 35px;
  }
</style>
