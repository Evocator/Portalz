import Vue from 'vue'
import App from './PortalForm.vue'
import VueFormulate from '@braid/vue-formulate'
import '../node_modules/@braid/vue-formulate/themes/snow/snow.min.css'

import axios from "axios"
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(VueFormulate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
