import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    endpointData: 0,
  },
  mutations: {
    setEndpointData(state, endpointData) {
      state.endpointData = endpointData;
    },
  },
  plugins: [createPersistedState()],
  actions: {},
});
