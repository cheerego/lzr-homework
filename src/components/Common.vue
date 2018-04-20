<template>
  <div class="swiper-container">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-100">Slide 1</div>
          <br>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div class="text" data-swiper-parallax="-300">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
              laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis
              rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
              feugiat non eros quis feugiat.</p>
          </div>
          {{ item }}
        </swiper-slide>

      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 2</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-300">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
            quis feugiat.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 3</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-300">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
            quis feugiat.</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    <!--<div class="my-swiper-button-next swiper-button-next" slot="button-next"></div>-->

  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'common',
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          speed: 600,
          parallax: true,
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          lazy: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // navigation: {
          //   nextEl: '.my-swiper-button-next',
          // }
        },

      }
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 80vh;
  }

  .my-swiper-button-next {
    left: 50%;
    position: fixed;
    bottom: 0px;
  }
</style>
