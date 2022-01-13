<template>
<!-- List all products and show images -->
<div>
  <div class="card" v-for="(product, i) in products" :key="i">
    <!-- INSERT IMAGE FROM PRODUCT.IMAGE -->
  <img :src="product.image" alt="Image Not Shown" style="width:100%">
  <h1>{{product.name}}</h1>
  <p>{{product.productcode}}</p>
  <p class="price">${{product.price}}</p>
  <p>Quantity: {{product.quantity}}</p>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["products"])
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}
</style>