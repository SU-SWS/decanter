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
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      jsmin: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
