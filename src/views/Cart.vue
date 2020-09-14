<template>
  <div class="w-auto text-center">
    <Carts />
  </div>
</template>

<script>
// @ is an alias to /src
import Carts from '@/components/CartComponent/Carts.vue'

export default {
  name: 'Cart',
  components: {
    Carts
  }
}
</script>