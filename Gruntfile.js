module.exports = function(grunt) {

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
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          // Require blanket wrapper for code coverage
          //require: 'coverage/blanket',
          captureFile: 'reports/grunt-mocha-test.xml', // output the reporter to a file
          quiet: false // suppress output to standard out (defaults to false)
        },
        coverage: {
          options: {
            reporter: 'html-cov',
            // use the quiet flag to suppress the mocha console output
            quiet: false,
            // specify a destination for output
            captureFile: 'coverage/coverage.html'
          }
        },
        src: ['spec/mocha.js']
      }
    }
  });
  grunt.registerTask('default', 'mochaTest');

};