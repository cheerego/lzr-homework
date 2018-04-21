<template>
  <div id="app">
    <header class="nav">
      <div class="nav-header">
        <img class="logo" src="./assets/logo.png" alt="">
      </div>
      <div class="nav-header nav-header-color">

        <div class="nav-links" >
          <div style="position: relative;height: 100%;line-height: 7.5vh;float: right">
            <router-link to="/pub" class="nav-link"><span @mouseenter="changeIsShowSubLink" @mouseleave="changeIsShowSubLink2">18号酒馆</span>
            </router-link>
            <router-link to="/verfine" class="nav-link"><span>拾捌精酿</span></router-link>
            <router-link to="/cooperation" class="nav-link last"><span>跨界合作</span></router-link>
            <ul class="sub-link" v-show="isShowSubLink" @mouseenter="changeIsShowSubLink" @mouseleave="changeIsShowSubLink2">
              <router-link to="/introduce" class="nav-link" tag="li"><span>介&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;绍</span></router-link>
              <router-link to="/us" class="nav-link last" tag="li"><span>团队成员</span></router-link>
            </ul>
          </div>
        </div>

      </div>
    </header>

    <transition enter-active-class="animated pulse">
      <router-view class="container"/>
    </transition>

    <footer class="footer">

    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        isShowSubLink:false
      }
    },
    methods:{
      changeIsShowSubLink(){
        this.isShowSubLink = true;
      },
      changeIsShowSubLink2(){
        this.isShowSubLink = false;
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul,li{
    list-style: none;
  }
  .sub-link{
    background: #000;
    position: absolute;
    left: 0;
    top:7.5vh;
    color: #fff;
    z-index: 999;
    cursor: pointer;
  }
  .sub-link li{
    /*height: 7.5vh;*/
    line-height: 5vh;
  }
  .sub-link li:hover {
  background: red;
  }
  .nav {
    height: 15vh;
  }

  .nav-header {
    height: 50%;
  }

  .logo {
    height: 300%;
    position: relative;
    top: 1vh;
    left: 8%;
    display: inline-block;
    z-index: 999;
  }

  .nav-header-color {
    background-color: black;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }
  .nav-links a{
    float: left;
    height: 100%;
  }

  .nav-links span{
    display: inline-block;
    height: 100%;
    padding: 0 4rem;
  }

  .nav-link {
    color: white;
  }

  a:link {
    text-decoration: none;
  }

  a:active {
    text-decoration: blink
  }

  a:hover {
    text-decoration: underline;
    background: red;
  }

  a:visited {
    text-decoration: none;
  }

  .footer {
    height: 5vh;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: black;
  }
  .container{
    height: 80vh;
    width: 100%;
  }

</style>
