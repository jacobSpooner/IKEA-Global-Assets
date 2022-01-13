<template>
<div>
    <router-link class="btn btn-primary btn-block" to="/products/add">Add Product</router-link>
    <table>
        <thead>
            <tr>
                <th>Product Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Product Image</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, i) in products" :key="i">
                <th scope="row">{{product.productcode}}</th>
                <td class="align-middle">{{product.name}}</td>
                <td class="align-middle">{{product.price}}</td>
                <td class="align-middle">{{product.quantity}}</td>
                <td class="align-middle">{{product.image}}</td>
                <td class="align-middle">   
                    <button class="btn btn-sm btn-secondary mx-2" @click="handleEdit(product)">Edit</button>
                    <button class="btn btn-sm btn-danger mx-2" @click="deleteProduct(product)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <router-view/>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["deleteProduct"]),
    handleEdit(product) {
      this.$router.push(`/products/edit/${product._id}`);
    }
  }
}
</script>
