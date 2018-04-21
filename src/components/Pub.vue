<template>
  <div class="pub">
    <div class="play-button" v-show="isShowPlay" @mouseenter="changeIsShowPlay2" @mouseleave="hoverLeave">
      <img :src="btns.play" alt="" :class="hoverCss" @click.stop="changeVideo" v-show="!isPlay">
      <img :src="btns.paused" alt="" :class="hoverCss" @click.stop="changeVideo" v-show="isPlay">
    </div>
    <video @mouseleave="changeIsShowPlay" @mouseenter="changeIsShowPlay2" id="myvideo" src="./../assets/video/movie2.mp4"></video>
    <!--</div>-->
  </div>

</template>

<script>
  export default {
    name: "Pub",
    data() {
      return {
        hoverCss: '',
        isPlay:false,
        isShowPlay:true,
        btns:{
          paused:require('./../assets/pub/pause.png'),
          play:require('./../assets/pub/play.png')
        }
      }
    },
    methods: {
//      hoverEnter() {
//        this.hoverCss = this.hoverCss+"animated fadeIn";
//      },
      hoverLeave(){
        this.hoverCss = "";
      },
      changeVideo(){
        console.log('11111')
          this._dom = document.getElementById('myvideo');
        if(!this.isPlay){
          this._dom.play();
        }else {
          this._dom.pause();
        }
          this.isPlay = !this.isPlay;
          this.isShowPlay = false;

      },

      changeIsShowPlay(){
        if(!this.isPlay)return;
        this.isShowPlay = false;
      },
      changeIsShowPlay2(){
        this.isShowPlay = true;
        this.hoverCss = this.hoverCss+"animated zoomIn";
      }}
  }
</script>

<style scoped>
  .pub {
    display: flex;
    /*background: url("../assets/pub/big-image.png");*/
    /*background-size: 100% 100%;*/
    /*background-repeat: no-repeat;*/
  }

  .play-button {
    /*width: 100%;*/
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 666;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 200px;
  }

  .play-button img {
    width: 100%;
    height: 100%;
    /*margin-left: calc(25%);*/
  }
  /*video{*/
    /*width: 100vw;*/
    /*!*height: 100%;*!*/
  /*}*/

  /*.vid-wrappper{*/
    /*width:100%;*/
    /*position:relative;*/
    /*padding-bottom:40%;    !*需要用padding来维持16:9比例,也就是9除以16*!*/
    /*height: 0;*/
  /*}*/
  /*.vid-wrappper video{*/
    /*position: absolute;*/
    /*top:0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*height: 100%*/
  /*}*/
  video{
    /*width: 100%;*/
    height: 100%;
    margin: 0 auto;
    background: blue;
  }
</style>
