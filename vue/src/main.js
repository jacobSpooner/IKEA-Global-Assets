import Vue from 'vue'
import App from './App.vue'
// Import store Add to the application 
import store from './store'

Vue.config.productionTip = false

//bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
