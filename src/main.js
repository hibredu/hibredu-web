import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/scss/app.scss';
import VueRouter from 'vue-router'
import { routes } from '../src/router/routes';
import store from './store'
import VueSimpleAlert from "vue-simple-alert";
import { VueMaskDirective } from 'v-mask';
import JsonCSV from 'vue-json-csv';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueSimpleAlert);
Vue.directive('mask', VueMaskDirective);
Vue.component('downloadCsv', JsonCSV)

const router = new VueRouter({
  routes : routes
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
