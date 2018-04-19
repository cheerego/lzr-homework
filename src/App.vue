<template>
  <div id="app">
    <header class="nav">
      <div class="nav-header">
        <img class="logo" src="./assets/logo.png" alt="">
      </div>
      <div class="nav-header nav-header-color">

        <div class="nav-links">
          <div>
            <router-link to="/pub" class="nav-link">十八号酒馆</router-link>
            <router-link to="/verfine" class="nav-link">十八精酿</router-link>
            <router-link to="/" class="nav-link last">跨界合作</router-link>
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
    name: 'App'
  }
</script>

<style scoped>
  .nav {
    height: 15vh;
  }

  .nav-header {
    height: 50%;
  }

  .logo {
    height: 270%;
    position: relative;
    top: 2vh;
    left: 10%;
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

  .nav-link {

    margin-left: 4rem;
    margin-right: 4rem;
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
