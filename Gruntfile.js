module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        includePaths: [
          "node_modules/bourbon/app/assets/stylesheets",
          "node_modules/bourbon-neat/app/assets/stylesheets",
          "node_modules/font-awesome/scss",
          "node_modules/normalize.css",
          "node_modules/neat-omega/core",
          "node_modules",
          "scss"
        ],
        lineNumbers: true,
        sourcemap: 'none'
      },
      dist: {
        files: {
          'css/decanter.css': 'scss/decanter.scss',
        }
      }
    },
    sasslint: {
      options: {
        configFile: '.sass-lint.yml'
      },
      target: ['scss/\*\*/\*.scss']
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/decanter.min.css': 'css/decanter.css',
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/decanter.min.js': 'js/decanter.js',
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      cssmin: {
        files: '**/*.css',
        tasks: ['cssmin']
      },
      jsmin: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
