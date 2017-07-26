import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-default/index.css'
import store from './store'
import fyContent from './views/Content/index'

Vue.use(ElementUI)
Vue.use(fyContent)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
