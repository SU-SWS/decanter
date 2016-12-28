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
        files: ['sass/{,*/}*.{scss,sass}'],
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
          'css/base/base.css': 'sass/base/base.sass',
          'css/components/components.css': 'sass/components/components.sass',
          'css/components/tabs.css': 'sass/components/tabs.sass',
          'css/components/messages.css': 'sass/components/messages.sass',
          'css/layout/layout.css': 'sass/layout/layout.sass',
          'css/theme/theme.css': 'sass/theme/theme.sass',
          'css/theme/print.css': 'sass/theme/print.sass'
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
  // Now that we've loaded the package.json and the node_modules we set the base path
  // for the actual execution of the tasks
  // grunt.file.setBase('/')
  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('devmode', "Watch and BrowserSync all in one.", ['browserSync', 'watch']);
  grunt.registerTask('default', ['availabletasks']);
};
