<template>
  <div id="wrapper">
    <main>
      <h4 class="text-center">Main page !</h4>
    </main>
  </div>
</template>

<script>
import utilMixin from '@/mixins/utils';
export default {
  name: 'LandingPage',
  mixins: [utilMixin],
  data() {
    return {
    };
  },
  async mounted() {
    const res = await this.getProjectsSource();
    console.log(res);
  },
};
</script>

<style lang="scss">

</style>
