<template>
  <div class="container mx-auto pt-5 z-0">
    <h1 class="text-center font-bold mb-5 text-5xl text-black bg-gray-300">Shopping Cart</h1>
    <div class="flex items-center justify-between flex-wrap bg-gray-900 w-full p-4">
      <List />
      <Checkout />
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import Checkout from './Checkout.vue'
export default {
    name: 'Carts',
    components: {
      List,
      Checkout
    }
}
</script>