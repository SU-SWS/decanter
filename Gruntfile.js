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
          "scss"
        ],
        lineNumbers: true,
        sourceMap: true,
        outputStyle: 'nested',
        precision: 10
      },
      dist: {
        files: {
          'css/decanter.css': 'scss/decanter.scss',
          'css/decanter-no-markup.css': 'scss/decanter-no-markup.scss',
          'css/decanter-grid.css': 'scss/decanter-grid.scss'
        }
      }
    },
    sasslint: {
      options: {
        configFile: '.sass-lint.yml'
      },
      target: ['scss/\*\*/\*.scss']
    },
    uglify: {
      my_target: {
        files: {
          'js/decanter.min.js': 'js/decanter.js',
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
        src: 'css/*.css'
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'styleguide']
      },
      jsmin: {
        files: 'js/**/*.js',
        tasks: ['uglify']
      },
      twig: {
        files: ['**/*.twig'],
        tasks: ['uglify', 'sass', 'styleguide']
      }
    },
    run: {
      styleguide: {
        "cmd": "kss",
        "args": ['--config=kss-config.json']
      }
    },
    symlink: {
      styleguidecss: {
        dest: 'styleguide/css',
        relativeSrc: '../css',
        options: {
          type: 'dir'
        }
      },
      styleguidejs: {
        dest: 'styleguide/js',
        relativeSrc: '../js',
        options: {
          type: 'dir'
        }
      },
      styleguideimg: {
        dest: 'styleguide/img',
        relativeSrc: '../img',
        options: {
          type: 'dir'
        }
      },
      styleguidefonts: {
        dest: 'styleguide/fonts',
        relativeSrc: '../fonts',
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

  grunt.registerTask('styleguide', ['run:styleguide', 'verbosity:symlinkquiet']);
  grunt.registerTask('compile', ['sass:dist', 'postcss:dist']);
  grunt.registerTask('default', ['watch']);

}
