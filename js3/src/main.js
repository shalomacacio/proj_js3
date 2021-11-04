import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueResource from './http/index'

Vue.config.productionTip = false

new Vue({
  router,
  vueResource,
  render: h => h(App),
}).$mount('#app')
