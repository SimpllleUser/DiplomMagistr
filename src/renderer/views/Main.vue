<template>
  <div id="wrapper">
    <main>
      <h4 class="text-center">Main page</h4>
    </main>
  </div>
</template>

<script>
import { spawn } from 'child_process';

export default {
  name: 'LandingPage',
  methods: {
    async createProjectDirectory(projectName) {
      const child = await spawn('powershell.exe', [`cd projects; mkdir ${projectName}`]);
      child.stdin.end();
    },
  },
  mounted() {
    this.createProjectDirectory('Todo');
  },
};
</script>

<style lang="scss">

</style>
