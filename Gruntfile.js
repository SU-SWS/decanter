/**
 * Gruntfile.
 * @type {[type]}
 */
module.exports = function(grunt) {

  /**
   * [sass description]
   * @type {[type]}
   */
  const sass = require('node-sass');

  /**
   * [pkg description]
   * @type {[type]}
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        implementation: sass,
        includePaths: [
          "node_modules/bourbon/core",
          "node_modules/bourbon-neat/app/assets/stylesheets",
          "node_modules/neat-omega/core",
          "node_modules",
          "core/scss"
        ],
        lineNumbers: true,
        sourceMap: true,
        outputStyle: 'nested',
        precision: 10
      },
      dist: {
        files: {
          'core/css/decanter.css':                        'core/scss/decanter.scss',
          'core/css/decanter-no-markup.css':              'core/scss/decanter-no-markup.scss',
          'core/css/decanter-grid.css':                   'core/scss/decanter-grid.scss',
          'kss/builder/decanter/kss-assets/css/kss.css':  'kss/builder/decanter/scss/kss.scss',
        }
      }
    },
    sasslint: {
      options: {
        configFile: '.sass-lint.yml'
      },
      target: ['core/scss/\*\*/\*.scss']
    },
    uglify: {
      my_target: {
        files: {
          'core/js/decanter.min.js': 'core/js/decanter.js',
        }
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('autoprefixer')({ grid: true, browsers: ['last 2 versions', 'ie 11']}) // add vendor prefixes
        ]
      },
      dist: {
        src: [
          'core/css/*.css',
          'kss/builder/decanter/kss-assets/css/*.css'
        ]
      }
    },
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['styleguide'],
        options: {
          livereload: true
        }
      },
      jsmin: {
        files: ['core/**/*.js'],
        tasks: ['uglify']
      },
      twig: {
        files: ['**/*.twig', '**/*.json'],
        tasks: ['styleguide']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'styleguide/css/decanter.css',
            'styleguide/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './styleguide'
        }
      }
    },
    clean: {
      styleguide: {
        src: [
          'styleguide'
        ]
      },
      postdeploy: {
        src: [
          '.styleguide_site'
        ]
      }
    },
    run: {
      styleguide: {
        "cmd": "./node_modules/.bin/kss",
        "args": ['--config=kss/kss-config.json']
      }
    },
    deploy_site: {
      styleguide: {
        options: {
          branch: 'master',
          commit_msg: 'autocommit',
          deploy_url: 'http://decanter.stanford.edu'
        },
        base_path: 'styleguide',
        remote_url: 'git@github.com:SU-SWS/decanter.github.io'
      }
    },
    copy: {
      styleguide: {
        files: [
          // includes files within path
          {expand: true, cwd: 'core/css', src: ['**'], dest: 'styleguide/css/'},
          {expand: true, cwd: 'core/fonts', src: ['**'], dest: 'styleguide/fonts/'},
          {expand: true, cwd: 'core/js', src: ['**'], dest: 'styleguide/js/'},
          {expand: true, cwd: 'core/img', src: ['**'], dest: 'styleguide/img/'},
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-deploy-site');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('deploy', ['styleguide', 'deploy_site:styleguide', 'clean:postdeploy']);
  grunt.registerTask('styleguide', ['compile', 'clean:styleguide', 'run:styleguide', 'copy:styleguide']);
  grunt.registerTask('compile', ['sass:dist', 'postcss:dist']);
  grunt.registerTask('dev', ['styleguide', 'browserSync', 'watch']);
  grunt.registerTask('default', ['watch']);

}
