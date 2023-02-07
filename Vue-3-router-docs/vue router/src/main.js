import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from '@/components/teams/TeamMembers';

const router = createRouter({
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/teams/:id',
      component: TeamMembers,
    },
    {
      path: '/users',
      component: UsersList,
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);

app.mount('#app');
