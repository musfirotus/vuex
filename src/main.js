import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2);

Vue.filter('currency', function (value) {
  if (!value) return ''
  let dot = value.toString().split(".");
  dot[0]=dot[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return `Rp ${dot.join(".")}`
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
