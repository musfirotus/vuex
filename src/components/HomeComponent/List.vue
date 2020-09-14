<template>
  <div class="container mx-auto pt-5 z-0">
    <h1 class="text-center font-bold mb-5 text-5xl text-black bg-gray-300">Shopping List</h1>
    <Search :message="message" @search-value="newSearch"/>
    <div class="h-100 w-full flex items-center justify-center font-sans">
        <div class="border border-white-500 w-full bg-gray-500 shadow-md rounded pt-6 pb-8 px-5">
            <h3 class="text-center font-bold mb-5 text-4xl text-black bg-blue-300">List Products</h3>
            <div class="grid grid-cols-3 grid-rows-auto gap-4">
                <div v-for="(f,idx) in posts" :key="idx">
                    <div class="mx-2 mb-auto rounded-t-full bg-white overflow-hidden shadow-lg p-5 border border-purple-500 w-6xl  pt-4 pb-4">
                        <a v-bind:href="f.url" target="_blank">
                        <img class="w-full pt-4 rounded-t-full" v-bind:src="f.thumbnailUrl" alt="Sunset in the mountains">
                        <div class="px-auto text-center py-4">
                            <div class="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{{f.title}}</div>
                            <div class="font-semibold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-2">{{f.harga | currency }}</div>
                        </div>
                        </a>
                        <button class="w-full font-bold h-10 bg-red-500" @click="addCart(f)">
                        Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from '@/components/HomeComponent/Search.vue'
export default {
    name: 'List',
    components: {
        Search
    },
    computed: {
        ...mapGetters(['posts'])
    }
}
</script>