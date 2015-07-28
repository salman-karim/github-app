module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    watch: {
      scripts: {
        files: ['**/*', '**/*.js'],
        tasks: ['jshint', 'jasmine'],
        }
      },
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*.js'
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['jshint', 'jasmine']);


};
