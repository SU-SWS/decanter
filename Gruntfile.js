/**
 * Gruntfile.
 * @type {[type]}
 */
module.exports = function(grunt) {

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
    run: {
      options: {
        wait: 0
      },
      webpack: {
        "cmd": "npm",
        'args': ['run-script', 'build']
      },
      styleguide: {
        "cmd": "npm",
        "args": ['run-script', 'styleguide']
      },
      watch: {
        "cmd": "npm",
        "args": ['run-script', 'watch']
      },
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
    deprecated_notice: {
      styleguide: "This function has been deprecated in favor of `npm run-script styleguide` and will be removed in future versions. Executing now."
    }
  });

  // Create a Deprecated notice task.
  grunt.task.registerTask('deprecated_notice', 'Logs a deprecated message.', function(arg1) {
    grunt.log.write(grunt.config.data.deprecated_notice[arg1]);
  });

  // Load up tasks.
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-deploy-site');

  // Register some new ones.
  grunt.registerTask('deploy', ['styleguide', 'deploy_site:styleguide', 'clean:postdeploy']);
  grunt.registerTask('styleguide', ['run:webpack', 'run:styleguide', 'deprecated_notice:styleguide']);
  grunt.registerTask('webpack', ['run:webpack']);
  grunt.registerTask('dev', ['styleguide', 'browserSync', 'run:watch']);
  grunt.registerTask('default', ['dev']);

}
