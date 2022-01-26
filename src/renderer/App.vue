<template>
  <div id="app">
   <layout-changes></layout-changes>
  </div>
</template>

<script>
import '@/assets/scss/app.scss';
import LayoutChanges from './views/layouts/LayoutChanges';

export default {
  name: 'App',
  components: { LayoutChanges },
  comments: {
    LayoutChanges,
  },
};
</script>

<style lang="scss">
/* CSS */
</style>
