//*//*//*//*//*//*
//*APIs and VARS
//*//*//*//*//*//*

const gulp = require('gulp');

const { dest, watch, parallel, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');

//*//*//*//*//*//*
//*TASKS
//*//*//*//*//*//*

//*FILE PATHS

const paths = {
  scss: './src/scss/**/*.scss',
  js: './src/js/**/*.js',
  htmlIndex: './dist/index.html',
  restHtmlPages: './dist/html/*.html',
  images: './src/assets/**/*.+(png|jpg|jpeg|JPG|PNG)',
  svgs: './src/assets/SVG/*.svg',
};

//* HTML TASK FOR INDEX.HTML

function htmlTask() {
  return gulp
    .src(paths.htmlIndex)
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'));
}

//* HTML TASK FOR OTHER HTML PAGES

function otherHtmlPagesTask() {
  return gulp
    .src(paths.otherHtmlPagesTask)
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist/html'));
}

//* SCSS TASK

function scssTask() {
  return gulp
    .src(['./src/scss/vars.scss', paths.scss])
    .pipe(plumber())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(cssnano())
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream());
}

//* JAVASCRIPT TASK

function jsTask() {
  return gulp
    .src(paths.js)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/js'));
}

//* IMAGE OPTIMIZATION TASK AND CONVERSION TO WEBP

function imgOptTask() {
  return gulp.src(paths.images).pipe(webp()).pipe(dest('./dist/assets/'));
}

//* SVG MINIFICATION

function svgOptTask() {
  return gulp
    .src(paths.svgs)
    .pipe(cache(imagemin()))
    .pipe(dest('./dist/assets/SVG'));
}

//* CLEAR CACHE

function clearCache() {
  return cache.clearAll();
}

//* WATCH TASK

function watchTask() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
  watch(paths.htmlIndex).on('change', browserSync.reload);
  watch(paths.restHtmlPages).on('change', browserSync.reload);
  watch(paths.scss, scssTask);
  watch(paths.js, jsTask).on('change', browserSync.reload);
  watch(paths.images, imgOptTask).on('change', browserSync.reload);
  watch(paths.svgs, svgOptTask).on('change', browserSync.reload);
}

//*//*//*//*//*//*
//*EXPORTS
//*//*//*//*//*//*
exports.scssTask = scssTask;
exports.jsTask = jsTask;
exports.htmlTask = htmlTask;
exports.otherHtmlPagesTask = otherHtmlPagesTask;
exports.imgOptTask = imgOptTask;
exports.svgOptTask = svgOptTask;
exports.watchTask = watchTask;
exports.clearCache = clearCache;

//* GULP SERVE

exports.build = parallel(scssTask, jsTask, imgOptTask, svgOptTask);

//* GULP DEFAULT COMMAND

exports.default = series(exports.build, watchTask);
