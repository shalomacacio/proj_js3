<template>
  <main>
    <h1 @click="getSimNao()">home</h1>
    <ul>
      <li v-for="(fatura, index) in faturas" :key="index"> {{ fatura }} </li>
    </ul>
  </main>
</template>

<script>
export default {

    data(){
      return {
        faturas: [],
      }
    },

    methods:{
    getSimNao(){
      var url = "faturas/inadimplencias/12";
      this.$http.get(url).then(function(res){
        console.log(res)
        this.faturas = res.data
      })
    } 
  }


}

</script>
<style scoped>
  main{
    background-color: var(--color-background-home);
  }
</style>