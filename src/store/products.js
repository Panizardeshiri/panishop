import Vue from "vue";
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: []
    },

    getters: {
        products: state => {
            return state.products
        }
    },
    
    mutations: {
        set_item (state , products) {
            state.products = products
        }
    },
    actions: {
        async loadproducts ({commit}) {
            try {               
                const response = await axios.get('https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products')
                commit('set_item', response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
    }


})