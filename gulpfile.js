var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var sassLint = require('gulp-sass-lint');

gulp.task('lint', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
    ;
});

gulp.task('default', ['lint'], () => {
    return gulp.src('sass/gridpro.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCss())
        .pipe(rename('gridpro.min.css'))
        .pipe(gulp.dest('dist/css'))
    ;
});
