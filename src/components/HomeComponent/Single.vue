<template>
    <div class="mx-2 mb-auto rounded-t-full bg-white overflow-hidden shadow-lg p-2 border border-purple-500 w-6xl pt-4">
        <a v-bind:href="product.url" target="_blank">
        <img class="w-full pt-2 pb-2 rounded-t-full " v-bind:src="product.thumbnailUrl" alt="Sunset in the mountains">
        <div class="px-auto text-center">
            <div class="font-bold text-base sm:text-lg md:text-xl">{{product.title}}</div>
            <div class="font-semibold text-base sm:text-lg md:text-xl mb-2">{{product.harga | currency }}</div>
        </div>
        </a>
        <h4 class="text-center">Count: {{ count }}</h4>
        <button class="w-full font-bold h-10 bg-red-500" @click="increment(1)">
            Add to Cart
        </button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "Single",
    props: ["product"],
    computed: {
        ...mapState(['count'])
    },
    methods:{
        ...mapActions(['increment'])
    }
}
</script>