<template>
  <div class="pub">
    <div class="play-button">
      <img src="../assets/pub/play-button.png" alt="" :class="hoverCss" v-on:mouseenter="hoverEnter" v-on:mouseleave="hoverLeave" >
    </div>

  </div>

</template>

<script>
  export default {
    name: "Pub",
    data() {
      return {
        hoverCss: ''
      }
    },
    methods: {
      hoverEnter() {
        this.hoverCss = this.hoverCss+"animated fadeIn";
      },
      hoverLeave(){
        this.hoverCss = "";
      }
    }
  }
</script>

<style scoped>
  .pub {
    display: flex;
    background: url("../assets/pub/big-image.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .play-button {
    width: 100%;
  }

  .play-button img {
    width: 50%;
    margin-left: calc(25%);
  }


</style>
