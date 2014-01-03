module.exports = function (grunt) {
  grunt.registerTask('install-hooks', function () {
    var fs = require('fs');

    grunt.file.copy('hooks/pre-commit', '.git/hooks/pre-commit');

    fs.lchmodSync('.git/hooks/pre-commit', '755');
  });

  grunt.registerTask('default', 'install-hooks');
};
