<template>
  <div id="wrapper">
    <main>
      <h4 class="text-center">Main page</h4>
    </main>
  </div>
</template>

<script>
import utilMixin from '@/mixins/utils';
export default {
  name: 'LandingPage',
  mixins: [utilMixin],
  async mounted() {
    const res = await this.createProjectDirectory('asdas');
  },
};
</script>

<style lang="scss">

</style>
