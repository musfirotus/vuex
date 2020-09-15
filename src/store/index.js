import Vue from 'vue'
import Vuex from 'vuex'
// import dataDummny from '@/data/dummy.json'
import myApi from '@/myApi.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: null,
    count: 0,
    cartItem: [],
    cartItemCount: 0
  },
  getters: {
  },
  mutations: {
    setUpProducts: (state, productsPayload) => {
      state.products = productsPayload;
    },
    increment: (state, payload) => {
      state.count += payload
    }
  },
  actions: {
    fetchProducts: ({ commit }) => {
      myApi.getProducts().then((products) => {
        commit("setUpProducts", products);
      });
    },
    increment: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increment", payload)
      }, 1000);
    }
  },
  modules: {
  }
})
