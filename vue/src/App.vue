<template>
  <div id="app">
    <Products/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    Products
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
