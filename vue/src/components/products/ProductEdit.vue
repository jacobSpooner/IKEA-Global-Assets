<template>
  <div>
        <div>
            <h2>{{ editMode ? "Edit Product" : "Add Product"}}</h2>
            <div class="form-group"><label>Product Code </label> <input type="text" class="form-control" v-model="product.productcode"></div>
            <div class="form-group"><label>Name </label> <input type="text" class="form-control" v-model="product.name"></div>
            <div class="form-group"><label>Price </label> <input type="text" class="form-control" v-model="product.price"></div>
            <div class="form-group"><label>Quantity </label> <input type="text" class="form-control" v-model="product.quantity"></div>
            <div class="form-group"><label>Image </label> <input type="text" class="form-control" v-model="product.image"></div>
            <div>
              <button class="btn btn-secondary" to="/products">Back</button>
              <button class="btn btn-primary" @click="handleProduct">{{ editMode ? "Edit" : "Add"}}</button>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() { //define the v-model
    return {
      product: {
        productcode: null,
        name: null,
        price: null,
        quantity: null,
        image: null
      }
    }
  },
  computed: {
    //Define editmode in computed to return the “op” parameter from the route instance as “edit”.
    editMode() {
      return this.$route.params["op"] == "edit"
    }
  },
  methods: {
    ...mapActions(["addProduct", "editProduct"]),
    handleProduct() {
      if(this.editMode) {
        this.editProduct(this.product)
      } else {
        this.addProduct(this.product);
      }
      this.$router.push("/products")
    }
  },
  created() {
    //getter
    if(this.editMode) {
      Object.assign(this.product, this.$store.getters.productById(this.$route.params["id"]))
    }
  }
}
</script>