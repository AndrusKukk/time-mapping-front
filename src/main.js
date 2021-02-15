import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
