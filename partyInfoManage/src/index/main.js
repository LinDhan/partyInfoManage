import Vue from 'vue'
import App from './App.vue'
import router from '../router/index.js'
import store from '../store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../public/global.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
