<template>
  <div class="index">
    <div class="index-left">
      <div class="all-product">
        <h2 class="left-title">全部产品</h2>
        <div class="left-wrap">
          <h3 class="sub-title">PC产品</h3>
          <ul class="product-list">
            <li v-for="order in orderList" :class="{hot: order.isHot}">
              <router-link :to="'/detail/'+order.url">{{order.product}}</router-link>
            </li>
          </ul>
        </div>
        <div class="left-wrap">
          <h3 class="sub-title">手机应用类</h3>
          <ul class="product-list">
            <li v-for="order in orderList" :class="{hot: order.isHot}">
              <router-link :to="'/detail/'+order.url">{{order.product}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="news-center">
        <h2 class="left-title">最新消息</h2>
        <div class="left-wrap">
          <ul class="news-list">
            <li v-for="news in newsList">
              <a>{{news.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="index-right">
      <slider></slider>
      <div class="index-cards">
        <router-link class="card" tag="a" v-for="order in orderList" 
        :to="'/detail/'+order.url" :key="order.orderId">
          <img :src="order.img" :alt="order.product">
          <div class="content">
            <h3 class="name">{{order.product}}</h3>
            <p class="desc">{{order.desc}}</p>
            <a class="buy-btn">立即购买</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import resource from 'vue-resource'
  import Slider from '@/components/Slider'

  Vue.use(resource)
  export default {
    components: {
      Slider
    },
    data () {
      return {
        newsList: [],
        orderList: []
      }
    },
    created () {
      this.$http.get('/static/db.json').then(res => {
        this.newsList = res.body.getNewsList
        this.orderList = res.body.getOrderList.list

        let orderUrls = ['statistics', 'predict', 'analysis', 'ad']
        let cardImgs = ['1.png', '2.png', '3.png', '4.png']
        for (let i = 0; i < this.orderList.length; i++) {
          this.orderList[i].url = orderUrls[i]
          this.orderList[i].img = require('@/assets/imgs/' + cardImgs[i])
        }
      })
    }
  }
</script>

<style scoped>
  .index-left {
    float: left;
    width: 270px;
    margin: 15px;
    overflow: hidden;
  }
  .all-product,.news-center {
    width: 100%;
    background-color: #fff;
  }
  .all-product {
    margin-bottom: 15px;
  }
  .left-title {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    background-color: #4FC08D;
  }
  .sub-title {
    font-size: 14px;
    margin-bottom: 14px;
  }
  .left-wrap {
    padding: 15px 10px;
    border-bottom: 1px solid #f2f2f2;
  }
  .left-wrap a {
    font-size: 13px;
    padding: 5px;
  }
  .news-center .left-wrap {
    min-height: 406px;
  }
  .index-right {
    width: 900px;
    float: left;
    margin-top: 15px;
  }
  .index-cards {
    margin-top: 15px;
  }
  .index-cards .card {
    position: relative;
    display: inline-block;
    width: 435px;
    height: 150px;
    margin-bottom: 15px;
    background-color: #fff;
  }
  .index-cards .card:nth-child(2n-1) {
    margin-right: 15px;
  }
  .index-cards .card img {
    margin-left: 20px;
    margin-top: 20px;
    vertical-align: top;
  }
  .index-cards .card .content {
    display: inline-block;
    width: 290px;
    margin-top: 15px;
    margin-left: 10px;
  }
  .index-cards .card .name {
    font-size: 17px;
  }
  .index-cards .card .desc {
    font-size: 14px;
    margin: 10px 0;
  }
  .buy-btn {
    display: inline-block;
    width: 80px;
    height: 26px;
    line-height: 26px;

    color: #fff;
    background-color: #4FC08D;
    font-size: 12px;
    text-align: center;
  }
  .hot:after {
    display: inline-block;
    content: 'HOT';
    color:#fff;
    background-color: #f00;
    font-size: 12px;
  }
</style>
