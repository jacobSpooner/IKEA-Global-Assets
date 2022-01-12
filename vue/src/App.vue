<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import Products from './components/products/Products.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    // Products,
    Header
  },
  // Define mapActions to dispatch Store Actions in methods
  methods: {
    ...mapActions(["setProductsAction"])
    },
  // Hook the actions when vue/app lifecycle is created to call them
  created() {
    this.setProductsAction()
  }
}
</script>
