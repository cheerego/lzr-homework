<template>
  <div class="swiper-container">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide>
        <div class="bg bg1">
          <div class="text">
            <p>18号酒馆，成立于2013年，四年间，我们建立了武汉第一个精酿啤酒厂牌、所属的啤酒贸易公司和两家BREWPUB（汉口店位于京汉大道，武昌店位于光谷K11购物艺术中心），2015年，18号酒馆获得大众点评五星商户，在这里数百种精酿啤酒供你选择，18 号酒馆一直坚持标准化的运营管理模式，并在华中区大力推广国内精酿啤酒文化，在近两年的国内各大精酿啤酒节上，均可看到其身影，它被誉为“华中地区最专业的精酿厂牌”。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg bg2">
          <div class="text">
            <p>我的初衷是为了让更多中国人体验到精酿与美食的魅力，我们精选原料，采用先进的设备工艺，致力于酿造更好喝并极具个性的啤酒，烹饪出健康且风味十足的餐食。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg bg3">
          <div class="text">
            <p>我们的啤酒工厂是中国华中地区第一个拿到“食品生产许可证”的专业酒厂
              酒厂出品的明星产品“跳东湖·IPA”在中国被誉为最棒的IPA，“胶片机·牛奶世涛”是中国第一款氮气啤酒！
            </p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--<div class="my-swiper-button-next" @click="next"></div>-->
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

  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .bg1{
    background: url("./../assets/introduce/bg1-1.jpg") no-repeat;
    background-size: cover;
    /*background-size: auto 100%;*/
  }
  .bg2{
    background: url("./../assets/introduce/bg2.jpg") no-repeat center;
    background-size: cover;
  }
  .bg3{
    background: url("./../assets/introduce/bg3.jpg") no-repeat center;
    background-size: cover;
  }
  p{
    line-height: 2rem;
  }
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
  .swiper-wrapper{
    width: 100%;
    height: 100%;
    background: red;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    position: relative;
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
    /*float: right;*/
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    text-shadow: 1px 1px 5px #000;
    letter-spacing:3px
  }
</style>
