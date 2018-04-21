<template>
  <div class="swiper-container">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide>
        <div class="bg bg1">
          <div class="text">
            <div class="title" data-swiper-parallax="-100">18号酒馆 x Σόλο（希腊）</div>
            <p>
              我们和来自希腊的世界级精酿厂牌 【Σόλο】 酒厂合酿了两款极具武汉特色的啤酒。
              加入小米椒的”武汉热·Porter“ 和 加入了普洱茶的 “克里特岛跳东湖·IPA”。
              两款啤酒均在中国和欧洲市场发售！
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg bg2">
          <div class="text">
            <div class="title" data-swiper-parallax="-100">18 号酒馆 X 京A</div>
            <p>
              来自北京的中国精酿啤酒厂牌京 A 团队 6 月专程来到武汉，体验「过早」魅力。我们碰撞并商讨联合酿造了一款有武汉过早味道的 早餐世涛，取名「过早」。
              纪录片导演麦克峰全程跟拍、记录了此次的「京汉合酿」之行，来自武汉多家新媒体转载酿酒体验全记录。
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg bg3">
          <!--<div class="text">-->
            <!--<div class="title" data-swiper-parallax="-100">18 号酒馆 X VICE中国</div>-->
            <!--<p>-->
              <!--VICE 团队（全球青年文化之声）在这个夏天来到武汉，与 18 号酒馆一起记录并完成了 TOP 5、大厨小吃系列作品的拍摄。《中国精酿热》这部由VICE中国出品的记录片在网路引起众多年轻人的关注。-->
            <!--</p>-->
          <!--</div>-->
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg bg4">
          <div class="text">
            <div class="title" data-swiper-parallax="-100" style="text-shadow: 1px 1px 6px #ffffff;color: black">18 号酒馆 X Randomevent</div>
            <p style=" text-shadow: 1px 1px 5px #ffffff;color: black">
              我们和国内顶尖潮流品牌 "Randomevent" 联名
              推出 2017 合作款系列 "Beer Revolution" 啤酒革命
              我们同样受着欧美及日本的影响
              同样注重设计与工艺
              也同样影响着新一代年轻人的生活方式
            </p>
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
    background: url("./../assets/cooperation/bg-c-1-2.jpg") no-repeat left 20%;
    background-size: cover;
  }
  .bg2{
    background: url("./../assets/cooperation/bg-c-2-2.jpg") no-repeat left 10%;
    background-size: cover;
  }
  .bg3{
    background: url("./../assets/cooperation/bg-c-3.jpg") no-repeat center;
    background-size: contain;
  }
  .bg4{
    background: url("./../assets/cooperation/bg-c-4-2.jpg") no-repeat;
    background-size: contain;
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
    max-width: 550px;
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
