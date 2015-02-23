var gulp = require('gulp');
var gutil = require('gulp-util');

var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

var sourceSASS = './scss';
var targetSASS = 'public/css';

var sourceJS = 'source/js';
var targetJS = 'public/js';


gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});



gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'watch']);