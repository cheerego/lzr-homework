<template>
  <div class="swiper-container">
    <!-- swiper -->
      <swiper :options="swiperOption" ref="mySwiper" >
        <div class="parallax-bg" slot="parallax-bg" style="height: 85vh" data-swiper-parallax="-5%"></div>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-100">Slide 1</div>
          <br>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div class="text" data-swiper-parallax="-300">
            <p>
              “自有的精酿啤酒品牌“拾捌精酿”，也是最早一批国内的先驱品牌，从产品设计、品控等多个环节处于行业领先地位，成为被爱好者广泛追捧的品牌。”——啤酒专业媒体IMBEER
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-100">Slide 2</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div class="text" data-swiper-parallax="-300">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-100">Slide 3</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div class="text" data-swiper-parallax="-300">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
          </div>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="my-swiper-button-next" @click="next"></div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'Verfine',
    data() {
      return {
        swiperOption: {
          loop:true,
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
          //   nextEl: '#my-swiper-button-next',
          // }
        },

      }
    },
    methods:{
      next(){
        this.swiper.slideNext();
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 80vh;
  }
  .my-swiper-button-next{
    z-index: 1000;
    position: fixed;
    bottom: 6vh;
    height: 4vh;
    width: 4vh;
    left: 50%;
    transform:rotate(45deg);
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
  .swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
    background-color: transparent!important;
    justify-content: space-around!important;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url(../assets/verfine/big-image.png);
  }
  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
    text-align: right;
  }
  .swiper-slide .subtitle {
    font-size: 21px;
    text-align: right;
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
    float: right;
  }
</style>
