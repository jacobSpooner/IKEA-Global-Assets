<template>
<!--Maybe contain a list of pages iike  -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Ikea Products Global</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["products"])
  }
}
</script>
