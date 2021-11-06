<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/global.css'
import Header from './components/layouts/Header'
export default {
  name:'App',
  components:{
    Header

  }
}

</script>


