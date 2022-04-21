const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const less = require('gulp-less');
const webpack = require('webpack-stream');

function html() {
    return gulp
        .src('src/**/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('dist'));
}

function css() {
    return gulp.src('src/**/*.less').pipe(less()).pipe(gulp.dest('dist'));
}

function ts() {
    return gulp.src('src/main.ts').pipe(webpack(require('./webpack.config.js'))).pipe(gulp.dest('dist'));
}

function watch() {
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/**/*.less', css);
    gulp.watch('src/**/*.ts', ts);
}

exports.default = gulp.series(gulp.parallel(html, css, ts), watch);
