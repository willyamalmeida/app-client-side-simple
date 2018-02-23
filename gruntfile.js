module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'src/assets/css',
            src: ['**/*.css', '!**/*.min.css'],
            dest: 'dist/assets/css'
          }]
        }
      },

      uglify: {
        target: {
          files: [{
            expand: true,
            cwd: 'src/assets/js',
            src: ['*.js', '!*.min.js'],
            dest: 'dist/assets/js'
          }]
        }
      },

      copy: {
        src: {
          files: [
            { expand: true, cwd: "src", src: "**/*.html", dest: "dist/" }
          ]
        }
      },
      
      watch: {
        html: {
          files: ["**"],
          tasks: ["cssmin", "uglify", "copy"]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask("default", ["cssmin", "uglify", "copy"]);
    grunt.registerTask("watch--",["watch"]);
  };
  