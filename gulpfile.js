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

var sourceJS = 'js/source';
var targetJS = 'js';


gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(prefixer())
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
    gulp.src(sourceJS + '/app.js')
        .pipe(concat("app.min.js"))
        .pipe(uglify({mangle: true}).on('error', gutil.log))
        .pipe(gulp.dest(targetJS));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./js/source/*.js', ['js']);

});


gulp.task('default', ['sass', 'watch', 'js']);