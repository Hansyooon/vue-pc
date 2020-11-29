import Vue from 'vue'
import App from './App.vue'

import router from './router'

//引入公共资源
import "./style/reset.css"
import "./style/swiper.min.css"
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
