import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import setAxios from '../../menuapp2.0/src/setAxios'
import 'vant/lib/index.less';
import '@vant/touch-emulator';

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

setAxios()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
