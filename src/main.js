import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/scss/app.scss';
import VueRouter from 'vue-router'
import { routes } from '../src/router/routes';

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes : routes
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
