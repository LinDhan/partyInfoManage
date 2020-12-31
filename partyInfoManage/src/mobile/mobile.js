import Vue from 'vue'
import Mobile from './mobile.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import '../../public/mobileGlobal.css'
import axios from 'axios'
import router from '../router/mobile.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant)
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(Mobile)
}).$mount('#mobile')
