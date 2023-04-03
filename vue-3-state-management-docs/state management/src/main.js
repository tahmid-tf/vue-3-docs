import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 1,
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
};

const app = createApp(App);

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },

  actions: {
    login({ commit, rootState }) {
      commit('setAuth', { isAuth: true });
      console.log(rootState.numbers.counter);
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  modules: {
    numbers: counterModule,
  },
});

app.use(store);

app.mount('#app');
