import Vue from 'vue';
import Vuex from 'vuex';
import storeManager from './storeManager';

Vue.use(Vuex);

const store = new Vuex.Store(storeManager);

export default store;
