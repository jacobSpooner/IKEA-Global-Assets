<template>
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
                <td>{{product.Name}}</td>
                <td>{{product.Price}}</td>
                <td>{{product.Quantity}}</td>
                <td>{{product.Image}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["products"])
  }
}
</script>
