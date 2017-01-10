/**
 * @file
 */
module.exports = function(grunt) {

  // This is where we configure each task that we'd like to run.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      // This is where we set up all the tasks we'd like grunt to watch for changes.
      scripts: {
        files: ['js/source/**/*.js'],
        tasks: ['uglify', 'drush:ccall'],
        options: {
          spawn: false,
        },
      },
      images: {
        files: ['images/source/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      },
      vector: {
        files: ['images/source/**/*.svg'],
        tasks: ['svgmin'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          interrupt: true
        }
      },
      twig: {
        files: ['templates/**/*.html.twig'],
        tasks: ['uglify', 'svgmin', 'imagemin', 'sass', 'drush:ccall']
      }
    },
    uglify: {
      // This is for minifying all of our scripts.
      options: {
        sourceMap: true,
        mangle: false
      },
      my_target: {
        files: [{
          expand: true,
          cwd: 'js/source',
          src: '{,*/}*.js',
          dest: 'js/build'
        }]
      }
    },
    imagemin: {
      // This will optimize all of our images for the web.
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/source/',
          src: ['{,*/}*.{png,jpg,gif}' ],
          dest: 'img/optimized/'
        }]
      }
    },
    svgmin: {
      options: {
        plugins: [{
          removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'images/source/',
          src: ['{,*/}*.svg' ],
          dest: 'images/optimized/'
        }]
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
          "node_modules"
        ],
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'expanded',
        precision: 5
      },
      dist: {
        files: {
          // Base Drupal Styles.
          'css/drupal/components/components.css':           'scss/drupal/components/components.scss',
          'css/drupal/components/tabs.css':                 'scss/drupal/components/tabs.scss',
          'css/drupal/components/messages.css':             'scss/drupal/components/messages.scss',
          'css/drupal/theme/print.css':                     'scss/drupal/theme/print.scss',
          // Theme compiled styles.
          'css/themes/basic/base/base.css':                 'scss/themes/basic/base/base.scss',
          'css/themes/basic/components/components.css':     'scss/themes/basic/components/components.scss',
          'css/themes/basic/layout/layout.css':             'scss/themes/basic/layout/layout.scss',
          'css/themes/basic/states/states.css':             'scss/themes/basic/states/states.scss',
          'css/themes/basic/theme/theme.css':               'scss/themes/basic/theme/theme.scss',
          'css/themes/basic/theme/print.css':               'scss/themes/basicy/theme/print.scss'
        }
      }
    },
    drush: {
      ccall: {
        args: ['cache-rebuild', 'all']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/**/*.css',
            'templates/**/*.twig',
            'images/optimized/**/*.{png,jpg,gif,svg}',
            'js/build/**/*.js',
            '*.theme'
          ]
        },
        options: {
          watchTask: true,
          // reloadDelay: 1000,
          // reloadDebounce: 500,
          reloadOnRestart: true,
          logConnections: true,
          injectChanges: false // Depends on enabling the link_css module
        }
      }
    },
    availabletasks: {
      tasks: {
        options: {
          filter: "include",
          tasks: [
            'browserSync', 'imagemin', 'sass', 'svgmin', 'uglify', 'watch', 'devmode'
          ]
        }
      }
    }
  });

  // This is where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-drush');

  // My tasks.
  grunt.registerTask('devmode', "Watch and BrowserSync all in one.", ['browserSync', 'watch']);

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('default', ['availabletasks']);
};
