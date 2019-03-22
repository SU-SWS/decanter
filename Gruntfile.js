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
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['styleguide'],
        options: {
          livereload: true
        }
      },
      jsmin: {
        files: ['src/**/*.js']
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
      webpack: {
        "cmd": "npm",
        'args': ['run-script', 'build']
      },
      styleguide: {
        "cmd": "./node_modules/.bin/kss",
        "args": ['--config=kss/kss-config.json']
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
    copy: {
      styleguide: {
        files: [
          // includes files within path
          {expand: true, cwd: 'src/css', src: ['**'], dest: 'styleguide/css/'},
          {expand: true, cwd: 'src/fonts', src: ['**'], dest: 'styleguide/fonts/'},
          {expand: true, cwd: 'src/js', src: ['**'], dest: 'styleguide/js/'},
          {expand: true, cwd: 'src/img', src: ['**'], dest: 'styleguide/img/'},
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-deploy-site');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('deploy', ['styleguide', 'deploy_site:styleguide', 'clean:postdeploy']);
  grunt.registerTask('styleguide', ['run:webpack', 'clean:styleguide', 'run:styleguide', 'copy:styleguide']);
  grunt.registerTask('webpack', ['run:webpack']);
  grunt.registerTask('dev', ['styleguide', 'browserSync', 'watch']);
  grunt.registerTask('default', ['dev']);

}
