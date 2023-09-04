const sass = require("sass");

module.exports = function (grunt) {
  var my_extension = "../typo3conf/ext/customext/";

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: [
          {
            src: "style.scss",
            dest: my_extension + "Resources/Public/Css/style.css",
          },
        ],
      },
    },

    cssmin: {
      dist: {
        files: [
          {
            src: my_extension + "Resources/Public/Css/style.css",
            dest: my_extension + "Resources/Public/Css/style.min.css",
          },
        ],
      },
    },

    ts: {
      options: {
        target: "ES6",
        fast: "never",
        noImplicitAny: false,
        removeComments: true,
        sourceMap: true,
        failOnTypeErrors: false,
      },
      dist: {
        src: "./script.ts",
        out: my_extension + "Resources/Public/Js/script.js",
      },
    },

    uglify: {
      dist: {
        files: [
          {
            src: my_extension + "Resources/Public/Js/script.js",
            dest: my_extension + "Resources/Public/Js/script.min.js",
          },
        ],
      },
    },

    copy: {
      jquery: {
        expand: true,
        cwd: "node_modules/jquery/dist",
        src: "**",
        dest: my_extension + "Resources/Public/vendor/jquery/",
      },
      jquery_easing: {
        expand: true,
        cwd: "node_modules/jquery.easing",
        src: "*.js",
        dest: my_extension + "Resources/Public/vendor/jquery-easing/",
      },
      bootstrap: {
        expand: true,
        cwd: "node_modules/bootstrap/dist",
        src: "**",
        dest: my_extension + "Resources/Public/vendor/bootstrap/",
      },
      popper: {
        expand: true,
        cwd: "node_modules/@popperjs/core/dist",
        src: "**",
        dest: my_extension + "Resources/Public/vendor/popper.js/",
      },
      fontawesome: {
        expand: true,
        cwd: "node_modules/@fortawesome/fontawesome-free",
        src: ["css/**", "js/**", "sprites/**", "webfonts/**"],
        dest: my_extension + "Resources/Public/vendor/fontawesome-free/",
      },
      fancybox: {
        expand: true,
        cwd: "node_modules/@fancyapps/fancybox/dist",
        src: "**",
        dest: my_extension + "Resources/Public/vendor/fancybox/",
      },
      aos: {
        expand: true,
        cwd: "node_modules/aos/dist",
        src: "**",
        dest: my_extension + "Resources/Public/vendor/aos/",
      },
      otherVendor: {
        expand: true,
        cwd: "vendor",
        src: "**",
        dest: my_extension + "Resources/Public/vendor/",
      },
    },

    exec: {
      nodeUpdate: "ncu && npm install",
    },

    watch: {
      options: {
        interval: 500,
        livereload: {
          options: { livereload: true },
        },
      },
      dist: {
        files: [my_extension + "Resources/Public/**/*"],
      },
      html: {
        files: ["../html/*"],
      },
      css: {
        files: ["./*.scss"],
        tasks: ["sass", "cssmin"],
      },
      ts: {
        files: ["./script.ts"],
        tasks: ["ts", "uglify"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("build", ["sass", "cssmin", "ts", "uglify", "copy"]);
  grunt.registerTask("default", ["exec:nodeUpdate", "build", "watch"]);
};
