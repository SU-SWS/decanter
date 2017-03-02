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
      target: ['core/\*\*/\*.scss']
    },
    sassdoc: {
      default: {
        src: 'core',
      }
    },
    sass: {
      // This will compile all of our sass files
      // Additional configuration options can be found at https://github.com/sindresorhus/grunt-sass
      options: {
        includePaths: [
          "node_modules/bourbon/core",
          "node_modules/bourbon-neat/core",
          "node_modules/font-awesome/scss",
          "node_modules/normalize.css",
          "node_modules/neat-omega",
          "node_modules",
          "core"
        ],
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'expanded',
        precision: 10
      },
      dist: {
        files: {
          'examples/css/index.css': 'examples/scss/index.scss',

          'examples/layout/one-column/basic/css/basic.css': 'examples/layout/one-column/basic/scss/basic.scss',

          'examples/layout/two-column/toucan/css/toucan.css': 'examples/layout/two-column/toucan/scss/toucan.scss',
          'examples/layout/two-column/donies/css/donies.css': 'examples/layout/two-column/donies/scss/donies.scss',
          'examples/layout/two-column/frogger/css/frogger.css': 'examples/layout/two-column/frogger/scss/frogger.scss',
          'examples/layout/two-column/pacman/left/css/pacman-left.css': 'examples/layout/two-column/pacman/left/scss/pacman-left.scss',
          'examples/layout/two-column/pacman/right/css/pacman-right.css': 'examples/layout/two-column/pacman/right/scss/pacman-right.scss',
          'examples/layout/two-column/plakes/left/css/plakes-left.css': 'examples/layout/two-column/plakes/left/scss/plakes-left.scss',
          'examples/layout/two-column/plakes/right/css/plakes-right.css': 'examples/layout/two-column/plakes/right/scss/plakes-right.scss',
          'examples/layout/two-column/trunks/left/css/trunks-left.css': 'examples/layout/two-column/trunks/left/scss/trunks-left.scss',
          'examples/layout/two-column/trunks/right/css/trunks-right.css': 'examples/layout/two-column/trunks/right/scss/trunks-right.scss',
          'examples/layout/two-column/wedge/left/css/wedge-left.css': 'examples/layout/two-column/wedge/left/scss/wedge-left.scss',
          'examples/layout/two-column/wedge/right/css/wedge-right.css': 'examples/layout/two-column/wedge/right/scss/wedge-right.scss',

          'examples/layout/three-column/sunset-delorean/left/css/sunset-delorean-left.css': 'examples/layout/three-column/sunset-delorean/left/scss/sunset-delorean-left.scss',
          'examples/layout/three-column/sunset-delorean/right/css/sunset-delorean-right.css': 'examples/layout/three-column/sunset-delorean/right/scss/sunset-delorean-right.scss'
        }
      }
    },
    watch: {
      css: {
        files: [
          'core/**/*.scss',
          'examples/**/*.scss',
          'examples/**/*.html'
        ],
        tasks: ['sass'],
        options: {
          interrupt: true
        }
      }
    }
  });

  // This is where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-sassdoc');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['availabletasks']);
};
