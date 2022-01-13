// Import Vue, Vuex and Axios.
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex)

// Set the Base URL and Set the products URL
const baseURL = "http://localhost:3000";
const productsURL = `${baseURL}/products`;

// Create Store module object for the application
export default new Vuex.Store({
    strict: true, //enable strict mode
    // State object that contains array of products
    state: {
        products: []
    },
    getters: {
        productById: (state) => (id) => state.products.find((product) => product._id === id)
    },
    // Mutations that sets states of all the products (Each mutation has a string type and a handler. It is like an event)
    mutations: {
        setProducts(state, products) {
            state.products = products
        }
    },
    // Actions that gets the products from DB and adds them to the State array. (actions commit mutations and can contain async ops)
    actions: {
        async setProductsAction(context) {
            context.commit("setProducts", (await Axios.get(productsURL)).data);
        },
        //Create an action – addProduct passing context and page. Post the products to Mongodb. Display the new Products UI by committing to setProducts.
        async addProduct(context, product) {
            await Axios.post(productsURL, product);
            context.commit("setProducts", (await Axios.get(productsURL)).data);
        },

        async editProduct(context, product) {
            await Axios.put(`${productsURL}/${product._id}`, product);
            context.commit("setProducts", (await Axios.get(productsURL)).data);
        },

        async deleteProduct(context, product) {
            await Axios.delete(`${productsURL}/${product._id}`, product);
            context.commit("setProducts", (await Axios.get(productsURL)).data);
        }
    }
});
