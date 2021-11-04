<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   


    <h3>Ecosystem</h3>
    <ul>
      <li><a href="#"  @click="getSimNao()" >Sim Não</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  methods:{
    getSimNao(){
      var url = "http://localhost:3000/faturas/inadimplencias/12";
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      axios.get(url,  ).then(function(res){
        console.log(res);
      })
    }

    
  }

}
</script>