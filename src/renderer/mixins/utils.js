import { promisify } from 'util';
import cp from 'child_process';

export default {
  methods: {
    async runExecCommand(terminalCommand) {
      const spawn = promisify(cp.spawn);
      try {
        const result = await spawn('powershell.exe', [terminalCommand], {});
        return result;
      } catch (error) {
        return 0;
      }
    },
    async createProjectDirectory(projectName) {
      if (!projectName) return;
      const child = await this.runExecCommand(`cd projects; mkdir ${projectName}`);
    },
  },
};
