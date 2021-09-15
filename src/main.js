import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/scss/app.scss';
import VueRouter from 'vue-router'
import { routes } from '../src/router/routes';
import store from './store'
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueSimpleAlert);

const router = new VueRouter({
  routes : routes
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
