// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import ElmementUi from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import VuePackages from '../packages';
import ClickOutSide from './utils/clickoutside';
import * as filters from './utils/filters';

/**
 * 本地开发使用，打包发布生产时请注释，配置请在mock/index.js下添加或注释
 */
import './mock';


Vue.use(ElmementUi);
Vue.use(VuePackages);
Vue.directive('clickoutside', ClickOutSide);

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
