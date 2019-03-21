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
      postdeploy: {
        src: [
          '.styleguide_site'
        ]
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
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-deploy-site');

  grunt.registerTask('deploy', ['deploy_site:styleguide', 'clean:postdeploy']);
  grunt.registerTask('dev', ['browserSync']);
}
