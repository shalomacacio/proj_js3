<template>
  <div id="app">
    <Header />

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import './assets/css/global.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer.vue'
export default {
  name:'App',
  components:{
    Header,
    Footer

  }
}

</script>


