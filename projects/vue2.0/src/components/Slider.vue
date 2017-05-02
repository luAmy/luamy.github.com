<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="pic in pics" :key="pic.title" :style="'background-image:url(' + pic.src + ')'">
      <a :href="pic.url" :alt="pic.title"></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  Vue.use(VueAwesomeSwiper)

  export default {
    name: 'slider',
    data () {
      return {
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          loop: true
        },
        pics: [
          {
            src: require('@/assets/slideShow/pic1.jpg'),
            url: '/detail/statistics',
            title: 'pic1'
          },
          {
            src: require('@/assets/slideShow/pic2.jpg'),
            url: '/detail/analysis',
            title: 'pic2'
          },
          {
            src: require('@/assets/slideShow/pic3.jpg'),
            url: '/detail/predict',
            title: 'pic3'
          },
          {
            src: require('@/assets/slideShow/pic4.jpg'),
            url: '/detail/ad',
            title: 'pic4'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 885px;
    height: 500px;
    margin-left: 0;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  .swiper-slide a {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
