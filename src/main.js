import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//注册axios
import * as http from './http/base'
Vue.prototype.$get = http.get;
Vue.prototype.$post = http.post;
Vue.prototype.$form = http.form;

//注册全局组件
import components from './components/global'
Vue.use(components)

//引入兼容
import 'babel-polyfill'

//引入观察者
Vue.prototype.$watcher = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
