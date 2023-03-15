<template>
  <div>
    <h1>{{ getData }}</h1>
    <button @click="addOne">Add 1</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    addOne() {
      // this.$store.commit('increament');

      this.$store.dispatch('testAction', 1);
    },
  },
  computed: {
    ...mapGetters(['getCounter']),
    getData() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>
