module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        includePaths: [
          "node_modules/bourbon/core",
          "node_modules/bourbon-neat/app/assets/stylesheets",
          "node_modules/normalize.css",
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
          'kss/builder/decanter/kss-assets/css/kss.css':  'kss/builder/decanter/scss/kss.scss'
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
        map: true,
        processors: [
          require('autoprefixer')
        ]
      },
      dist: {
        src: 'core/css/*.css'
      }
    },
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass', 'postcss', 'styleguide'],
        options: {
          livereload: true
        }
      },
      jsmin: {
        files: ['core/**/*.js'],
        tasks: ['uglify']
      },
      twig: {
        files: ['**/*.twig'],
        tasks: ['uglify', 'sass', 'styleguide']
      }
    },
    clean: {
      styleguide: {
        src: [
          'styleguide'
        ]
      }
    },
    run: {
      styleguide: {
        "cmd": "./node_modules/.bin/kss",
        "args": ['--config=kss/kss-config.json', '--verbose']
      }
    },
    symlink: {
      styleguidecss: {
        dest: 'styleguide/css',
        relativeSrc: '../core/css',
        options: {
          type: 'dir'
        }
      },
      styleguidejs: {
        dest: 'styleguide/js',
        relativeSrc: '../core/js',
        options: {
          type: 'dir'
        }
      },
      styleguideimg: {
        dest: 'styleguide/img',
        relativeSrc: '../core/img',
        options: {
          type: 'dir'
        }
      },
      styleguidefonts: {
        dest: 'styleguide/fonts',
        relativeSrc: '../core/fonts',
        options: {
          type: 'dir'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-symlink');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('styleguide', ['compile', 'uglify', 'clean:styleguide', 'run:styleguide', 'symlink']);
  grunt.registerTask('compile', ['sass:dist', 'postcss:dist']);
  grunt.registerTask('default', ['watch']);

}
