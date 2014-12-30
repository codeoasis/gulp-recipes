var del = require('del');

module.exports = function (gulp, $, gutil, helpers, src, options) {
  'use strict';

  // Clean test
  gulp.task('clean:test', 'Clean test dir', function (cb) {
    return del([src.test.tmp, src.test.coverage], cb);
  });

  // Clean all temp folders
  gulp.task('clean', 'Clean tmp, dist and css directories', function (cb) {
    return del([src.dist, src.tmp, src.cssDir], cb);
  });

};
