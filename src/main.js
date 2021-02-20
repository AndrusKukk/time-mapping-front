import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$host = ""

new Vue({
    router,
    vuetify,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')

const token = localStorage.getItem('user-token')
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
}