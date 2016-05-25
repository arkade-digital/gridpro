var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('default', function() {
    return gulp.src('sass/gridpro.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCss())
        .pipe(rename('gridpro.min.css'))
        .pipe(gulp.dest('dist/css'))
    ;
});
