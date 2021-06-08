<template>
  <div id="app">
    <Navbar2/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar2 from './components/Navbar2.vue'
import Footer from './components/Footer.vue'
// require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
  components: {
    Navbar2,
    Footer
  }
};
</script>

<style>
/* @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"; */
@import "assets/css/style.css";
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
</style>
