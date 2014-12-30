/* jshint camelcase:false */
'use strict';

var gulp    = require('gulp'),
    run     = require('run-sequence'),
    gutil   = require('gulp-util'),
    helpers = require('./gulp/helpers'),
    _       = require('lodash');

// Gulp load plugins
var $ = require('gulp-load-plugins')();

var pkg = require('./package.json');

// Global paths
var src = {
  cwd: 'app',
  dist: 'dist',
  main: 'scripts/**/*app.js',
  stylesDir: 'styles',
  scriptsDir: 'scripts',
  cssDir: 'app/styles/css',
  bowerDir: 'app/bower_components',
  translationsDir: 'translations',
  testDir: 'test',
  tmp: 'app/.tmp',
  images: 'images/**/*.{png,jpg,gif,ico}',
  fonts: 'fonts/**/*.{eof,woff,ttf,svg,css}',
  resources: 'resources/**/*.{json, tml, txt}',
  scripts: 'scripts/**/*.js',
  modules: 'scripts/**/*[mM]odule.js',
  tpls: 'scripts/**/*.tpl.js',
  env: 'scripts/config/env/',
  envFiles: '**/env_*.js',
  index: 'index.html',
  sass: 'styles/**/*.scss',
  css: 'styles/**/*.css',
  coffee: '**/*.coffee',
  templates: 'views/**/*.html',
  pot: 'translations/*.po',
  test: {
    tmp: 'test/.tmp',
    coverage: 'test/coverage'
  },
  karma: 'karma.conf.js'

};

// Gulp options, reading from package.json
var options = _.extend(pkg, {
  port: 9090,
  autoprefix: 'last 1 version',
  module: pkg.options.module,
  templateModule: pkg.options.templateModule,
  templatePo: pkg.options.templatePo,
  translationsFile: 'translations.js',
  context: {
    ENV:   gutil.env.env || 'dev',
    DEBUG: gutil.env.debug || false
  }
});


