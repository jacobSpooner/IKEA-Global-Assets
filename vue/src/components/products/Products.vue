<template>
<div>
    <router-link class="btn btn-primary btn-block" to="/products/page/add">Add Product</router-link>
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
                <th scope="row">{{product.ProductCode}}</th>
                <td class="align-middle">{{product.Name}}</td>
                <td class="align-middle">{{product.Price}}</td>
                <td class="align-middle">{{product.Quantity}}</td>
                <td class="align-middle">{{product.Image}}</td>
                <td class="align-middle">   
                    <button class="btn btn-sm btn-secondary mx-2" @click="handleEdit(product)">Edit</button>
                    <button class="btn btn-sm btn-danger mx-2" @click="deletePage(product)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
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
      this.$router.push(`edit/${product._id}`);
    }
  }
}
</script>
