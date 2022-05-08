import Vue from 'vue'
import App from './App.vue'
import router from './router'
import services from '@/services';

Vue.prototype.$http = services;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
