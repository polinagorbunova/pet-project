const gulp = require('gulp')
const nunjucks = require('gulp-nunjucks')
const less = require('gulp-less')

function html() {
    return gulp
        .src('src/**/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('dist'))
}

function css() {
    return gulp.src('src/**/*.less').pipe(less()).pipe(gulp.dest('dist'))
}

function watch() {
    gulp.watch('src/**/*.html', html)
    gulp.watch('src/**/*.less', css)
}

exports.default = gulp.series(gulp.parallel(html, css), watch)
