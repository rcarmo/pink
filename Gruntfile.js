module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist'],
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/pink.min.js': [
            'libs/Pink/Plugin/Router/1/lib.js', 
            'libs/Pink/Plugin/Signals/1/lib.js',
            'libs/Pink/Data/Binding/1/lib.js',
            'libs/Pink/Data/Module/1/lib.js',
            'libs/Pink/Data/DragDrop/1/lib.js',
            'libs/Pink/Data/Tooltip/1/lib.js',
            'libs/Pink/Data/Kanban/1/lib.js',
            'libs/Pink/Data/AutoComplete/1/lib.js',
            'libs/Pink/Data/ModalWindow/AlertBox/1/lib.js',
            'libs/Pink/Data/ModalWindow/InfoBox/1/lib.js',
            'libs/Pink/Data/ModalWindow/1/lib.js',
            'libs/Pink/Data/Validation/1/lib.js',
            'libs/Pink/Data/Paginator/1/lib.js',
            'libs/Pink/Data/Grid/1/lib.js',
            'libs/Pink/Data/Tabs/1/lib.js',
            'libs/Pink/Data/Carousel/1/lib.js',
            'libs/Pink/App/1/lib.js'
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          {src: 'libs/Pink/**/*.html', dest: 'dist/'},
          {src: 'content/css/pink.css', dest: 'dist/'}
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'copy']);
};
