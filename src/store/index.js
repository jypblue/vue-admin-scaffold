import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import sidemenu from './modules/sidemenu';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    sidemenu,
  },
  strict: process.env.NODE_ENV !== 'production',
});

// console.log(store)

export default store;
