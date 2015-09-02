/**
 * Created by dvelur on 22-08-15.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
var bower = require('main-bower-files');
var inject = require('gulp-inject');
var series = require('stream-series');

gulp.task('copy-lib', function() {
    return gulp.src(bower(), { base: 'bower_components' })
        .pipe(gulp.dest('src/lib/'));
});

gulp.task('index', function () {
    var vendorStream = gulp.src(['src/lib/**/*.js','src/lib/**/*.css'], {read: false});

    var appStream = gulp.src(['src/index.js','src/app/**/*.js', 'src/resources/css/**/*.css'], {read: false});

    gulp.src('src/index.html')
        .pipe(inject(series(vendorStream, appStream),{relative:true}))
        .pipe(gulp.dest('src/'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'src/',
        livereload: true,
        port:8000
    });
});

gulp.task('html', function () {
    gulp.src('src/app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['src/app/**/*.html'], ['html']);
});

gulp.task('default', ['copy-lib','index','connect', 'watch']);