import { promisify } from 'util';
import cp from 'child_process';
import fs from 'fs';
import constants from '../../contants';

export default {
  methods: {
    async runTerminalCommand(terminalCommand) {
      const spawn = promisify(cp.exec);
      const result = await spawn(`powershell.exe; ${terminalCommand}`);
      return result;
    },
    async copyPastDirectory(fromDir, toDir) {
      const resultCope = await this.runTerminalCommand(`cp -r ${fromDir} ${toDir}`);
      return resultCope;
    },
    async createProjectByTemplate(projectName) {
      if (projectName === 'template-app') return console.error('project by this name not access !');
      const resultCreate = await this.copyPastDirectory(
        `${constants.PROJECTS_PATH}/template-app`,
        `${constants.PROJECTS_PATH}/template-app/${projectName}`,
      );
      return resultCreate;
    },
    async runProjectByName(projectName) {
      const resultRunProject = await this.runTerminalCommand(`cd
      projects/${projectName}; npm run dev`);
      return resultRunProject;
    },
    async getProjectsSource() {
      const directories = await promisify(fs.readdir)(constants.PROJECTS_PATH);
      return directories;
    },
  },
};
