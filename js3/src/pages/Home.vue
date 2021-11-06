<template>
  <div>
    <h1>{{ name }}</h1>
    <ul>
      <li><a href="#"  @click="getSimNao()" >Sim Não</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  


  props: {
    msg: String
  },
  methods:{
    getSimNao(){
      var url = "faturas/inadimplencias/12";
      this.$http.get(url).then(function(res){
        res.array.forEach(element => {
          console.log(element)
        });
      })
    } 
  }
}

</script>