import ViewUI from 'view-design';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/index.less';

Vue.config.productionTip = false;

Vue.use(ViewUI, { transfer: true});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
