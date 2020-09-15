<template>
    <div>
        <header class="h-0 inline-block" id="nav">
          <router-link class="inline-block" to="/"><img class="fill-current h-6 mr-2" src="https://www.flaticon.com/premium-icon/icons/svg/2173/2173841.svg" alt=""></router-link> | 
          <div class="inline-block wrapper-cart">
            <router-link class="inline-block" to="/cart">
              <img class="fill-current h-6 mr-2" src="https://www.flaticon.com/svg/static/icons/svg/3082/3082031.svg" alt="">
            </router-link>
            <p class="text-cart inline-block">{{ cartItemCount }}</p>
          </div>
        </header>
        <router-view />
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Header',
    computed: {
      ...mapState(['cartItemCount'])
    },
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
  .wrapper-cart {
      width: 36px;
      height: 30px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
  }
  .icon-cart {
      width: 20px;
      height: 20px;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: 20% 20%;
  }
  .text-cart {
      min-width: 25px;
      min-height: 25px;
      color: rgb(255, 255, 255);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.9;
      text-align: center;
      background-color: rgb(239, 20, 74);
      border: 2px solid rgb(255, 255, 255);
      border-radius: 18px;
      position: absolute;
      top: -10px;
      right: -8px;
      padding: 0px 4px;
      transform: translate(30%, -8%);
  }
</style>