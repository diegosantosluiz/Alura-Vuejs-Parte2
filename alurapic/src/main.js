import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate, { Validator } from 'vee-validate';
import ptBr from 'vee-validate/dist/locale/pt_BR';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({ 
  routes: routes,
  mode: 'history' 
});

Vue.use(VeeValidate);
Validator.localize('pt-BR', ptBr);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
