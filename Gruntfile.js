module.exports = function(grunt) {

  // Run the grunt tasks.
  grunt.loadNpmTasks('grunt-phantom');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-blanket');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      }
      //build: {
        //src: 'spec/<%= pkg.name %>.js',
        //dest: 'reports/<%= pkg.name %>min.js'
     //}
    },
    phantom: {
      options: {
        port: 4444
      },
      your_target: {
      }
    },
    clean: {
      coverage: {
        src: ['coverage/']
      }
    },
    copy: {
      coverage: {
        src: ['spec/**'],
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
          src: ['coverage/spec/*.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['phantom', 'clean', 'blanket', 'copy', 'mochaTest']);


};