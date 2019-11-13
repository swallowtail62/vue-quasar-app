import Vue from 'vue';
// TODO: resolve compile ERROR
import VueChatScroll from 'vue-chat-scroll';

import App from './App.vue';
import router from './router';
import store from './store';
import './quasar';

import '@/styles/_normalize.scss'

Vue.config.productionTip = false;

Vue.use(VueChatScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
