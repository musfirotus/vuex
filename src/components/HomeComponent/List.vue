<template>
  <div class="container mx-auto pt-5 z-0">
    <h1 class="text-center font-bold mb-5 text-5xl text-black bg-gray-300">Shopping List</h1>
    <Search />
    <div class="h-100 w-full flex items-center justify-center font-sans">
        <div class="border border-white-500 w-full bg-gray-500 shadow-md rounded pt-6 pb-8 px-5">
            <h3 class="text-center font-bold mb-5 text-4xl text-black bg-blue-300">List Products</h3>
            <div class="grid grid-cols-4 grid-rows-auto gap-4">
                <div v-for="product in products" :key="product.id">
                    <Single :product="product" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Search from '@/components/HomeComponent/Search.vue'
import Single from '@/components/HomeComponent/Single.vue'
export default {
    name: 'List',
    components: {
        Search,
        Single
    },
    computed: {
        ...mapState(['products']),
    },
    methods: {
        ...mapActions(['fetchProducts'])
    },
    created(){
        this.fetchProducts()
    }
}
</script>