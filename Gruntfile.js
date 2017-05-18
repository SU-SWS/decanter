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
    // Examples: https://github.com/SassDoc/grunt-sassdoc/blob/master/Gruntfile.js
    sassdoc: {
      default: {
        src: 'core',
        options: {
          dest: 'docs/core',
          verbose: 0,
          autofill: ['requires', 'throws'],
          exclude: [
            'vendors/*',
          ],
          display: {
            sort: [
              'group<',
              'access',
              'line>',
              'file',
            ],
          },
          groups: {
            '_variables|__decanter': 'Decanter Settings',
            '_variables|_bourbon': 'Bourbon Settings',
            '_variables|_neat': 'Neat Settings',
            '_variables|animations': 'Animation & Transition Variables',
            '_variables|borders': 'Border Variables',
            '_variables|breakpoint-boundaries': 'Breakpoint Variables',
            '_variables|grid-media': 'Grid Media Variables',
            '_variables|buttons': 'Button Variables',
            '_variables|colors': 'Color Variables',
            '_variables|containers': 'Container Variables',
            '_variables|forms': 'Form Variables',
            '_variables|typography': 'Typography Variables',
            '_variables|vertical-rhythm': 'Vertical Rhythm Variables',
            'font-management': 'Font Loading & Management',
            'functions': 'Functions',
            'mixins': 'Mixins',
            'base|_documentation': 'Documentation for Base',
            'base|box-model': 'Box Model',
            'base|body': 'Body',
            'base|typography': 'Typography',
            'base|forms': 'Forms',
            'base|lists': 'Lists',
            'base|tables': 'Tables',
            'base|media-elements': 'Media Elements',
            'base|buttons': 'Buttons',
          },
        },
      },
      base: {
        src: 'core/base',
        options: {
          dest: 'docs/base',
          verbose: 0,
          autofill: ['requires', 'throws'],
          display: {
            sort: [
              'group<',
              'access',
              'line>',
              'file',
            ],
          },
          groups: {
            'base|_documentation': 'Documentation for Base',
            'base|box-model': 'Box Model',
            'base|body': 'Body',
            'base|typography': 'Typography',
            'base|forms': 'Forms',
            'base|lists': 'Lists',
            'base|tables': 'Tables',
            'base|media-elements': 'Media Elements',
            'base|buttons': 'Buttons',
          },
        },
      },
      components: {
        src: 'core/components',
        options: {
          dest: 'docs/components',
          verbose: 0,
          autofill: ['requires', 'throws'],
          display: {
            sort: [
              'group<',
              'access',
              'line>',
              'file',
            ],
          },
        },
      },
      functions: {
        src: 'core/utilities/functions',
        options: {
          dest: 'docs/functions',
          verbose: 0,
          autofill: ['requires', 'throws'],
          display: {
            sort: [
              'group<',
              'access',
              'line>',
              'file',
            ],
          },
        },
      },
      mixins: {
        src: 'core/utilities/mixins',
        options: {
          dest: 'docs/mixins',
          verbose: 0,
          autofill: ['requires', 'throws'],
          display: {
            sort: [
              'group<',
              'access',
              'line>',
              'file',
            ],
          },
        },
      },
      placeholders: {
        src: 'core/utilities/placeholders',
        options: {
          dest: 'docs/placeholders',
          verbose: 0,
          autofill: ['requires', 'throws'],
          display: {
            sort: [
              'group<',
              'access',
              'line>',
              'file',
            ],
          },
        },
      },
      variables: {
        src: 'core/utilities/variables',
        options: {
          dest: 'docs/variables',
          verbose: 0,
          autofill: ['requires', 'throws'],
          display: {
            sort: [
              'group<',
              'access',
              'line>',
              'file',
            ],
          },
          groups: {
            'variables|bourbon': 'Bourbon Settings',
            'variables|neat': 'Neat Settings',
            'variables|decanter': 'Decanter Settings',
            'variables|animations': 'Animations',
            'variables|borders': 'Borders',
            'variables|breakpoint-boundaries': 'Breakpoints',
            'variables|grid-media': 'Grid Media',
            'variables|buttons': 'Buttons',
            'variables|colors': 'Colors',
            'variables|containers': 'Containers',
            'variables|forms': 'Forms',
            'variables|typography': 'Typography',
            'variables|vertical-rhythm': 'Vertical Rhythm',
          },
        },
      },
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
          "node_modules/neat-omega/core",
          "node_modules",
          "core"
        ],
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'expanded',
        precision: 10,
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

          'examples/layout/three-column/bars/css/bars.css': 'examples/layout/three-column/bars/scss/bars.scss',
          'examples/layout/three-column/battleship/css/battleship.css': 'examples/layout/three-column/battleship/scss/battleship.scss',
          'examples/layout/three-column/blastila/left/css/blastila-left.css': 'examples/layout/three-column/blastila/left/scss/blastila-left.scss',
          'examples/layout/three-column/blastila/right/css/blastila-right.css': 'examples/layout/three-column/blastila/right/scss/blastila-right.scss',
          'examples/layout/three-column/chess/css/chess.css': 'examples/layout/three-column/chess/scss/chess.scss',
          'examples/layout/three-column/cuttoner/left/css/cuttoner-left.css': 'examples/layout/three-column/cuttoner/left/scss/cuttoner-left.scss',
          'examples/layout/three-column/cuttoner/right/css/cuttoner-right.css': 'examples/layout/three-column/cuttoner/right/scss/cuttoner-right.scss',
          'examples/layout/three-column/percles/left/css/percles-left.css': 'examples/layout/three-column/percles/left/scss/percles-left.scss',
          'examples/layout/three-column/percles/right/css/percles-right.css': 'examples/layout/three-column/percles/right/scss/percles-right.scss',
          'examples/layout/three-column/robot/css/robot.css': 'examples/layout/three-column/robot/scss/robot.scss',
          'examples/layout/three-column/space-invader/css/space-invader.css': 'examples/layout/three-column/space-invader/scss/space-invader.scss',
          'examples/layout/three-column/strigges/css/strigges.css': 'examples/layout/three-column/strigges/scss/strigges.scss',
          'examples/layout/three-column/sunset-delorean/left/css/sunset-delorean-left.css': 'examples/layout/three-column/sunset-delorean/left/scss/sunset-delorean-left.scss',
          'examples/layout/three-column/sunset-delorean/right/css/sunset-delorean-right.css': 'examples/layout/three-column/sunset-delorean/right/scss/sunset-delorean-right.scss',
          'examples/layout/three-column/thions/top/css/thions-top.css': 'examples/layout/three-column/thions/top/scss/thions-top.scss',
          'examples/layout/three-column/thions/bottom/css/thions-bottom.css': 'examples/layout/three-column/thions/bottom/scss/thions-bottom.scss',
          'examples/layout/three-column/valmer/left/css/valmer-left.css': 'examples/layout/three-column/valmer/left/scss/valmer-left.scss',
          'examples/layout/three-column/valmer/right/css/valmer-right.css': 'examples/layout/three-column/valmer/right/scss/valmer-right.scss',

          'examples/layout/four-column/molive/css/molive.css': 'examples/layout/four-column/molive/scss/molive.scss',

          'examples/layout/full-width/bricks/css/bricks.css': 'examples/layout/full-width/bricks/scss/bricks.scss',

          'examples/mixins/centered-container/css/style.css': 'examples/mixins/centered-container/scss/style.scss',
          'examples/mixins/adjust-container-width/css/adjust-container-width.css': 'examples/mixins/adjust-container-width/scss/adjust-container-width.scss',
          'examples/mixins/items-per-row/css/style.css': 'examples/mixins/items-per-row/scss/style.scss',
          'examples/mixins/color-system/css/style.css': 'examples/mixins/color-system/scss/style.scss'

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
        tasks: ['sass', 'sassdoc'],
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
