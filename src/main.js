import Vue from 'vue'
import App from './App.vue'

import router from './router'

//引入公共资源
import "./style/reset.css"
import "./style/swiper.min.css"
import './plugins/element.js'
import store from './store'
import "./mock/mockServevrs"
import "./style/iconfont.css"



Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
