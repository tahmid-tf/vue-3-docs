<template>
  <base-container title="Vuex">
    <ChangeCounter></ChangeCounter>
    <FavoriteValue></FavoriteValue>
  </base-container>

  <base-container>
    <UserAuth title="Auth"></UserAuth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from '@/components/FavoriteValue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },

  methods: {
    addOne() {
      this.$store.state.counter++;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
