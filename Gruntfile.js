module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'test_django_vue/assets/css/main.css': 'test_django_vue/assets/sass/main.scss',
        },
      },
    },
    watch: {
      sass: {
        file: ['test_django_vue/assets/css/*.scss'],
        tasks: ['sass:dist'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass:dist']);
};
