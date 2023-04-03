import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from '@/components/teams/TeamMembers';

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // if savedPosition is available, return to that position
      return savedPosition;
    } else {
      // scroll to the top of the page
      return { top: 0 };
    }
  },
  routes: [
    {
      path: '/teams',
      component: TeamsList,

      beforeEnter: (to, from, next) => {
        // Perform some action before entering the route
        console.log('Entering this route');
        next();
      },
    },
    {
      path: '/teams/:id',
      component: TeamMembers,
      props: true,
      name: 'teams',
    },
    {
      path: '/users',
      component: UsersList,
    },
    { path: '/:pathMatch(.*)', redirect: '/teams' },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);

app.mount('#app');
