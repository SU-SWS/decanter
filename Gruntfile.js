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
          "dist/scss"
        ],
        lineNumbers: true,
        sourceMap: true,
        outputStyle: 'nested',
        precision: 10
      },
      dist: {
        files: {
          'dist/css/decanter.css':                        'dist/scss/decanter.scss',
          'dist/css/decanter-no-markup.css':              'dist/scss/decanter-no-markup.scss',
          'dist/css/decanter-grid.css':                   'dist/scss/decanter-grid.scss',
          'kss/builder/decanter/kss-assets/css/kss.css':  'kss/builder/decanter/scss/kss.scss'
        }
      }
    },
    sasslint: {
      options: {
        configFile: '.sass-lint.yml'
      },
      target: ['dist/scss/\*\*/\*.scss']
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/decanter.min.js': 'dist/js/decanter.js',
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
        src: 'dist/css/*.css'
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
        files: ['dist/**/*.js'],
        tasks: ['uglify']
      },
      twig: {
        files: ['**/*.twig'],
        tasks: ['uglify', 'sass', 'styleguide']
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
        relativeSrc: '../dist/css',
        options: {
          type: 'dir'
        }
      },
      styleguidejs: {
        dest: 'styleguide/js',
        relativeSrc: '../dist/js',
        options: {
          type: 'dir'
        }
      },
      styleguideimg: {
        dest: 'styleguide/img',
        relativeSrc: '../dist/img',
        options: {
          type: 'dir'
        }
      },
      styleguidefonts: {
        dest: 'styleguide/fonts',
        relativeSrc: '../dist/fonts',
        options: {
          type: 'dir'
        }
      }
    },
    verbosity: {
      symlinkquiet: {
        options: {
          mode: 'hidden'
        },
        tasks: ["symlink"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-symlink');
  grunt.loadNpmTasks('grunt-verbosity');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('styleguide', ['compile', 'uglify', 'run:styleguide', 'symlink']);
  grunt.registerTask('compile', ['sass:dist', 'postcss:dist']);
  grunt.registerTask('default', ['watch']);

}
