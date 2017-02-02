/**
 * @file
 */
module.exports = function(grunt) {

  // This is where we configure each task that we'd like to run.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    availabletasks: {
      tasks: {}
    },
    sasslint: {
      options: {
        configFile: '.sass-lint.yml'
      },
      target: ['\*\*/\*.scss']
    }
  });

  // This is where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-available-tasks');

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['availabletasks']);
};
