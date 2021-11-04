<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li><a href="#"  @click="getSimNao()" >Sim Não</a></li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'Home',
  props: {
    msg: String
  },

  methods:{
    getSimNao(){
      var url = "faturas/inadimplencias/12";
      this.$http.get(url).then(function(res){
        console.log(res);
      })
    }

    
  }

}
</script>