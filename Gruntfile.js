'use strict';

module.exports = function(grunt) {

    grunt.config.set('load-options.folder', 'grunt');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {config: 'node_modules/@bci-rb-ui/cli/package'});

    // grunt.loadNpmTasks('gruntify-eslint');

    grunt.registerTask('default', [
        'build-module'
    ]);
};
