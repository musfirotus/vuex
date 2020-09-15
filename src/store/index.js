import Vue from 'vue'
import Vuex from 'vuex'
// import dataDummny from '@/data/dummy.json'
import myApi from '@/myApi.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: null,
    count: 0,
    cart: []
  },
  getters: {
  },
  mutations: {
    setUpProducts: (state, productsPayload) => {
      state.products = productsPayload;
    },
    increment: (state) => {
      state.count++
    }
  },
  actions: {
    fetchProducts: ({ commit }) => {
      myApi.getProducts().then((products) => {
        commit("setUpProducts", products);
        commit("showToast", "products loaded");
      });
    }
  },
  modules: {
  }
})
