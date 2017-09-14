<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import url('./css/reset.css');
*{
  margin:0;
  padding:0;
}
body{
  background:url('./imgs/bg.jpg') no-repeat;
  background-size:cover;
}
body,html,#app{
  width:100%;
  height:100%;
}
#app {
  position:relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
