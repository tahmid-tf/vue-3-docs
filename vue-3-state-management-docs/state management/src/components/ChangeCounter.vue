<template>
  <div>
    <h1>{{ getData }}</h1>
    <button @click="addOne">Add 1</button>
  </div>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.commit('increament');

      this.$store.dispatch('numbers/testAction', 1);
    },
  },
  computed: {
    getData() {
      return this.$store.getters['numbers/getCounter'];
    },
  },
};
</script>
