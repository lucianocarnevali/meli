import Vue from 'vue'
import App from './App.vue'
import router from './router'
import services from '@/services';
import VueMeta from 'vue-meta';

Vue.prototype.$http = services;
Vue.use(VueMeta);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
