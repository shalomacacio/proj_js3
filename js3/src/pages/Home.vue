<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li><a href="#"  @click="getSimNao()" >Sim Não</a></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
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