import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VuePaginate from 'vue-paginate'
import { BootstrapVue } from 'bootstrap-vue'
import CheckboxRadio from 'vue-checkbox-radio';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VuePaginate)
Vue.use(CheckboxRadio)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
