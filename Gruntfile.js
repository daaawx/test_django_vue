module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'media/assets/css/main.css': 'media/assets/sass/main.scss',
        },
      },
    },
    watch: {
      sass: {
        file: ['media/assets/css/*.scss'],
        tasks: ['sass:dist'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass:dist']);
};
