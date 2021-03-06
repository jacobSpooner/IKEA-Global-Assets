// Create a folder “router” in src folder. Have an index.js file. Copy the contents of store  index.js.
// Import Vue, Vuex and Axios.
import Vue from "vue";

import VueRouter from "vue-router";

import List from "../components/List"
import Products from "../components/products/Products";
import ProductEdit from "../components/products/ProductEdit"

// Load the router to the app.
Vue.use(VueRouter)

// Create and export the vueRouter by defining mode and routes array.
export default new VueRouter({
    mode: "history",

    routes: [
        {   path: "/products", 
            component: Products,
            children: [
                { path: ":op(add|edit)/:id?", component: ProductEdit }
                // { path: "add", component: ProductEdit }
            ] 
        },
        {path: "/", component: List}
    ]
});




