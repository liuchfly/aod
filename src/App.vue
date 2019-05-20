<template>
  <div id="app">
    <headers></headers>
    <taps></taps>
    <banner></banner>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import Headers from './components/header/header'
import Taps from './components/tap/tap'
import Banner from './components/banner/banner'
import Foot from './components/footer/footer'
  export default {
    name: 'App',
    components:{
      Headers,
      Taps,
      Banner,
      Foot
    }
  }
  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
