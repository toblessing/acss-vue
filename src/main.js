import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import './plugins/iview.js'
import store from './store'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(VueRouter);
Vue.use(iView);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
