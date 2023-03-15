import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 1,
      test: 0,
    };
  },

  mutations: {
    increament(state) {
      state.counter = state.counter + 1;
    },
    testMutation(state, payload) {
      state.counter = state.counter + payload;
    },
  },

  getters: {
    getCounter(state) {
      return state.counter;
    },
  },

  actions: {
    async testAction({ commit }, payload) {
      commit('testMutation', payload);
    },
  },
});

app.use(store);

app.mount('#app');
