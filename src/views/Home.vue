<template>
  <div class="w-auto text-center">
    <List />
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/HomeComponent/List.vue'

export default {
  name: 'Home',
  components: {
    List
  }
}
</script>
