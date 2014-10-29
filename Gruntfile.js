module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    phantom: {
      options: {
        port: 4444
      },
      cucumber: {
      }
    },
    clean: {
      coverage: {
        src: ['coverage/']
      }
    },
    copy: {
      coverage: {
        src: ['spec*'],
        dest: 'coverage/'
      }
    },
    blanket: {
      coverage: {
        src: ['spec/'],
        dest: 'coverage/spec/'
      }
    },
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'xunit',
          // output the reporter to a file
          captureFile: 'reports/grunt-mocha-test.xml',
          src: ['spec/mocha_unit_tsts.js']
        },
        coverage: {
          options: {
            reporter: 'html-cov',
            //quit flag suppress output to standard out
            quiet: true,
            // specify a destination for output
            captureFile: 'reports/code-coverage.html'
          }
        },
        'travis-cov': {
          options: {
            reporter: 'travis-cov'
          },
          src: ['coverage/spec.js']
        }
      }
    }
    // Configure simple mochaTest task
    /*mochaTest: {
      test: {
        options: {
          reporter: 'xunit',
          captureFile: 'reports/mocha-test.xml', // Optionally capture the reporter output to a file
          quiet: false // Optionally suppress output to standard out (defaults to false)
        },
        src: ['spec/mocha.js']
      }
    }*/
  });
  // Run the grunt tasks.
  grunt.loadNpmTasks('grunt-phantom');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-blanket');


  //grunt.registerTask('default', [ 'phantom', 'mochaTest']);
  grunt.registerTask('default', ['phantom', 'clean', 'blanket', 'copy', 'mochaTest']);


};