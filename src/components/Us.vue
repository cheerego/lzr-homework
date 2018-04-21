<template>
  <div class="swiper-container">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide>
        <div class="bg bg1">
          <div class="text">
            <div class="title" data-swiper-parallax="-100">酿酒师姜麒</div>
            <p>
              拾捌精酿主酿酒师，唯一获得啤酒世界杯（IBC）冠军的中国籍酿酒师。
              湖北自酿协会发起人，慕尼黑工业大学认证啤酒酿造师，中国轻工部啤酒酿造高级技工。
              2009 年从武汉啤酒学校毕业后，一直从事小型啤酒酿造行业，在上海多家餐饮公司任酿酒师职位。
              2012 年回到武汉，致力于推广精酿文化，曾经任职于比利时督威贸易武汉分公司，后与 18 号酒馆合作负责酿酒，并拥有自己的小型酒厂。
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg2">
          <div class="text">
            <p>我的初衷是为了让更多中国人体验到精酿与美食的魅力，我们精选原料，采用先进的设备工艺，致力于酿造更好喝并极具个性的啤酒，烹饪出健康且风味十足的餐食。</p>
          </div>
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

  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .bg1{
    background: url("./../assets/us/bg1.jpg") no-repeat;
    background-size: cover;
    /*background-size: auto 100%;*/
  }
  .bg2{
    position: absolute;
    /*width: 60%;*/
    width: 100%;
    height: 100%;
    background: url("./../assets/us/bg2.jpg") no-repeat center 35%;
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
