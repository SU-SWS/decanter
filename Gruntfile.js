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
        files: ['js/source/{,*/}*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      images: {
        files: ['images/source/{,*/}*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      },
      vector: {
        files: ['images/source/{,*/}*.svg'],
        tasks: ['svgmin'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['sass/{,*/}*.{scss,sass}', 'scss/{,*/}*.{scss,sass}'],
        tasks: ['sass']
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
          cwd: 'images/source/',
          src: ['{,*/}*.{png,jpg,gif}' ],
          dest: 'images/optimized/'
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
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'expanded',
        precision: 5
      },
      dist: {
        files: {
          // Uncomment to render each part individually.
          // 'css/drupal/base/base.css':             'scss/drupal/base/base.scss',
          // 'css/drupal/components/components.css': 'scss/drupal/components/components.scss',
          // 'css/drupal/components/tabs.css':       'scss/drupal/components/tabs.scss',
          // 'css/drupal/components/messages.css':   'scss/drupal/components/messages.scss',
          // 'css/drupal/layout/layout.css':         'scss/drupal/layout/layout.scss',
          // 'css/drupal/theme/theme.css':           'scss/drupal/theme/theme.scss',

          // Base Drupal Styles.
          'css/drupal/all.css':                   'scss/drupal/all.scss'
          'css/drupal/theme/print.css':           'scss/drupal/theme/print.scss',

          // Pattern library compiled styles.
          'css/pattern-library/all.css':          'scss/pattern-library/all.scss',
          'css/pattern-library/print.css':        'scss/pattern-library/print.scss',

          // Custom tweaks and glue code for the base Drupal styles and the
          // pattern library. Also, Additional themes can be added there.

          // Basic theme Glue Code.
          'css/themes/basic/all.css':             'scss/themes/basic/all.scss'

          // Example sub style/theme.
          // 'css/themes/basic-light/all.css':    'scss/themes/basic-light/all.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/{,*/}*.css',
            'templates/{,*/}*.twig',
            'images/optimized/{,*/}*.{png,jpg,gif,svg}',
            'js/build/{,*/}*.js',
            '*.theme'
          ]
        },
        options: {
          watchTask: true,
          // Change this to "true" if you'd like the css to be injected rather than a browser refresh. In order for this to work with Drupal you will need to install https://drupal.org/project/link_css keep in mind though that this should not be run on a production site.
          injectChanges: false
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

  // My tasks.
  grunt.registerTask('devmode', "Watch and BrowserSync all in one.", ['browserSync', 'watch']);

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('default', ['availabletasks']);
};
