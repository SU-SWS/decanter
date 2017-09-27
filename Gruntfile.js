module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        lineNumbers: true,
        sourcemap: 'none'
      },
      dist: {
        files: {
          'css/decanter.css': 'scss/decanter.scss',
        }
      }
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
