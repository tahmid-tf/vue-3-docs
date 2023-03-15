<template>
  <div>
    <h3>{{ counter }}</h3>
    <p>We do more ...</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
  },

  methods: {
    addOne() {
      this.$store.commit('increament');
    },
  },
};
</script>
`
