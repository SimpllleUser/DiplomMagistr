<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import BaseLayout from './BaseLayout.vue';
import EmptyLayout from './EmptyLayout.vue';

export default {
  name: 'LayoutChanges',
  components: {
    BaseLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout}-layout`;
    },
  },
};
</script>

<style scoped>

</style>
