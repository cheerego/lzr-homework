<template>
  <div>
    <input type="text" v-model="text">
    <div>{{ text }}</div>
  </div>
</template>

<script>
  export default {
    name: "Verfine",
    data() {
      return {
        text:'456'
      }
    }
  }
</script>

<style scoped>

</style>
