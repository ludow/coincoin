"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jscs: {
      files: {
        src: [
          "**/*.js",
          "!node_modules/**/*.js"
        ]
      },
      options: {
        config: ".jscsrc"
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      files: {
        src: [
          "**/*.js",
          "!node_modules/**/*.js"
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.registerTask("lint", ["jshint", "jscs"]);
};
