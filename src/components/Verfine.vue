<template>
  <div class="swiper-container">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide>
        <div class="bg bg1">
          <div class="text" style="left:2rem;color: black;text-shadow: 1px 1px 5px #fff">
            <p>
              “自有的精酿啤酒品牌“拾捌精酿”，也是最早一批国内的先驱品牌，从产品设计、品控等多个环节处于行业领先地位，成为被爱好者广泛追捧的品牌。”——啤酒专业媒体IMBEER
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg bg2">
          <div class="text">
            <div class="title" data-swiper-parallax="-100">跳东湖</div>
            <p>武汉年轻人夏日的狂欢——跳东湖活动（跳东湖活动被国内外媒体VICE、路透社、lonely plante、百度、今日头条、FM92.7楚天交通广播、FM105.8楚天音乐广播、  FM107.8湖北私家车广播、上海电视台第一财经频道、湖北经视、武汉电视台新闻频道、武汉电视台文体频道对跳东湖活动进行报道传播）</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg bg3">
          <div class="text" style="right: 0;color: black;text-shadow: 1px 1px 5px #000">
            <div class="title" data-swiper-parallax="-100">跳东湖IPA</div>
            <p>为纪念武汉每年一次青年人的节日“跳东湖”我们把这款酒命名为“跳东湖·IPA”，它投入了大量的美式酒花，有着热带水果的奔放，和草本的清香。使用了高质量的比利时麦芽，酒体清澈透亮，饱满的麦芽的甜味和酒花的回甘，是一款十分标准的美式IPA产品。
            </p>
          </div>
        </div>
        <div class="bg bg4">
          <div class="text" style="right: 2rem;color: black;text-shadow: 1px 1px 5px #000">
            <div class="title" data-swiper-parallax="-100">胶片机</div>
            <p>
              以武汉独立摄影师张哿的名字为名，这款酒和胶片机整体的感受类似：厚、醇、甜、极具隐藏感。
              它用10种不同麦芽和谷物，打破传统世涛啤酒焦苦感觉，咖啡，巧克力，太妃糖香味混合丝滑如牛奶的口感，简直就是一杯香浓拿铁，我们突破了技术壁垒，将瓶啤中注入了氮气，让口感更为醇厚，也是国内第一款氮气啤酒。
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
    background: url("./../assets/verfine/bg-v-1.jpg") no-repeat left;
    background-size: 100% 100%;
    /*background-size: auto 100%;*/
  }
  .bg2{
    background: url("./../assets/verfine/bg-v-2.jpg") no-repeat;
    background-size: cover;
  }
  .bg3{
    width: 55%;
    background: url("./../assets/verfine/bg-v-3.jpg") no-repeat;
    background-size: contain;
    left: 0;
  }
  .bg4{
    width: 45%;
    right: 0;
    background: url("./../assets/verfine/bg-v-4.jpg") no-repeat;
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
    max-width: 350px;
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
  /*.swiper-slide .text:first-of-type {*/
    /*left: 2rem;*/
  /*}*/

</style>
