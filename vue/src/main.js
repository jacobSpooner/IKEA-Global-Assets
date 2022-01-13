import Vue from 'vue'
import App from './App.vue'

// Import store Add to the application 
import store from './store'
import router from './routes'

Vue.config.productionTip = false

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
