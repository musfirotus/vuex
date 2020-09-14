<template>
    <div>
        <header class="h-0 inline-block" id="nav">
            <router-link class="inline-block" to="/"><img class="fill-current h-6 mr-2" src="https://www.flaticon.com/premium-icon/icons/svg/2173/2173841.svg" alt=""></router-link> | 
            <router-link class="inline-block" to="/cart"><img class="fill-current h-6 mr-2" src="https://www.flaticon.com/svg/static/icons/svg/3082/3082031.svg" alt=""></router-link>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
