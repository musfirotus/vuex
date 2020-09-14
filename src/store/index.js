import Vue from 'vue'
import Vuex from 'vuex'
import dataDummny from '@/data/dummy.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: dataDummny,
    storeCart: [],
    searchValue: "",
    searchData: "",
    filtered: [],
    carts: [],
    cari: [],
    message: ""
  },
  getters: {
    posts: (state) => {
      return state.posts
    },
    storeCart: (state) => state.storeCart,
    // posts
  },
  mutations: {
  },
  actions: {
    cariData(e) {
      const newData = [...this.posts];
      if (e.length >= 3){
        this.message = "Loading..."
        this.filtered = newData.filter(val => val.title.toLowerCase().includes(e))
      }
      else {
        this.message = ""
        this.filtered = []
      }
    },
    removeCart(e){
      console.log(e);
      this.carts = this.carts.filter(
        (data) => data.id != e.id
      );
      this.posts.unshift(e)
      this.$swal('Remove Item', 'Berhasil hapus cart!', 'info');
    },
    addCart(e){
      console.log(e)
      this.filtered = this.filtered.filter(
        (data) => data.id != e.id
      );
      this.carts.unshift(e);
      this.posts = this.posts.filter(
        (data) => data.id != e.id
      );
      this.$swal('Add Item', 'Berhasil tambah cart!', 'info');
    }
  },
  modules: {
  }
})
