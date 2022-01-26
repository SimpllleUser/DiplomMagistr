import Vue from 'vue';
import Vuex from 'vuex';

import { createPersistedState, createSharedMutations } from 'vuex-electron';

// import empt from './modules/empt';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // empt,
  },
  plugins: [
    createPersistedState(),
    createSharedMutations(),
  ],
  strict: process.env.NODE_ENV !== 'production',
});
