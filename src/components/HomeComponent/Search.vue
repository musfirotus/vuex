<template>
  <div class="h-32 w-full flex items-center justify-center bg-teal-lightest font-sans mb-auto">
    <form class="w-full border border-purple-500 max-w-xs bg-white shadow-md rounded px-5 pt-5 pb-5 mb-4">
      <input v-on:keyup="check" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Insert Title">
      <!-- <h4 class="mt-3 mb-3" v-if="this.searchValue.length >= 1 && this.searchValue.length <= 2">Min. 3 huruf!</h4> -->
      <h1 class="mt-3 mb-3"></h1>
      <p class="max-w-xl text-center text-gray-600 text-xs">
        Coded by Musfirotus
      </p>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>