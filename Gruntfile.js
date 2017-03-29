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
          "scss",
          "node_modules/bourbon/core",
          "node_modules/bourbon-neat/core",
          "node_modules/font-awesome/scss",
          "node_modules/neat-omega",
          "node_modules/decanter/core",
          "node_modules"
        ],
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'compressed',
        precision: 10
      },
      dist: {
        files: {
          // Component Wrap Up.
          'css/components/components.css':                  'scss/components/components.scss',
          // Components are compiled individually so they may be included
          // conditionally using logic built in to the theme template or module.
          'css/components/brand-bar.css':                   'scss/components/brand-bar/brand-bar.scss',
          'css/components/brand-lockup.css':                'scss/components/brand-lockup/brand-lockup.scss',
          'css/components/breadcrumb.css':                  'scss/components/breadcrumb/breadcrumb.scss',
          'css/components/global-footer.css':               'scss/components/global-footer/global-footer.scss',
          'css/components/main-menu.css':                   'scss/components/main-menu/main-menu.scss',
          'css/components/messages.css':                    'scss/components/messages/messages.scss',
          'css/components/navigation.css':                  'scss/components/navigation/navigation.scss',
          'css/components/pager.css':                       'scss/components/pager/pager.scss',
          'css/components/site-name.css':                   'scss/components/site-name/site-name.scss',
          'css/components/tabs.css':                        'scss/components/tabs/tabs.scss',
          // Theme compiled styles.
          'css/base/base.css':                              'scss/base/base.scss',
          'css/layout/layout.css':                          'scss/layout/layout.scss',
          'css/states/states.css':                          'scss/states/states.scss',
          'css/theme/theme.css':                            'scss/theme/theme.scss',
          'css/theme/centered-container.css':               'scss/theme/centered-container.scss',
          'css/theme/print.css':                            'scss/theme/print.scss'
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
  grunt.registerTask('devmode', "Watch and BrowserSync all in one.", ['drush', 'browserSync', 'watch']);

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('default', ['availabletasks']);
};
