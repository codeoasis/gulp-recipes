var stylish = require('jshint-stylish');

module.exports = function (gulp, $, gutil, helpers, src) {
  'use strict';
  gulp.task('jshint', 'Executes jshint on the files', function () {
    return gulp.src(src.scripts, {cwd: src.cwd})
      .on('error', helpers.logError)
      // check whether there are changes
      .pipe($.changed(src.scripts))
      // run jshine
      .pipe($.jshint())
      // and report using the stylish plugin
      .pipe($.jshint.reporter(stylish))
      .pipe($.if(!gutil.env.skip, $.jshint.reporter('fail')));
  });

  gulp.task('jscs', function () {
    return gulp.src(src.scripts, {cwd: src.cwd})
      .pipe($.jscs());
  });
};
