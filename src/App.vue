<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <MainTable /> -->

    <router-view></router-view>
  </div>
</template>

<script>
// import MainTable from './components/MainTable.vue'

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
