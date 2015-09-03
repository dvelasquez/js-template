/**
 * Created by dvelur on 22-08-15.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    bower = require('main-bower-files'),
    series = require('stream-series'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    annotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    runSequence = require('run-sequence'),
    gutil = require('gulp-util');

//DEV TASK
gulp.task('copy-lib', function() {
    return gulp.src(bower(), { base: 'bower_components' })
        .pipe(gulp.dest('src/lib/'));
});

gulp.task('index', function () {
    var vendorStream = gulp.src(['src/lib/**/*.js','src/lib/**/*.css'], {read: false});

    var appStream = gulp.src(['src/index.js','src/app/**/*.js','src/app/**/*.css'], {read: false});

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

//END DEV TASK

//DIST TASK
gulp.task('clean-build', function(){
    return gulp.src('./dist')
        .pipe(clean());
});

gulp.task('build-app-js', function () {
    return gulp.src(['src/index.js','src/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(annotate())
        .pipe(concat('app.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-app-css', function () {
    return gulp.src(['src/**/*.css', '!src/lib/**/*.*'])
        .pipe(concat('app.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-vendor-js', function () {
    return gulp.src(['src/lib/**/*.js'])
        .pipe(jshint())
        .pipe(annotate())
        .pipe(concat('lib.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-vendor-css', function () {
    return gulp.src('src/lib/**/*.css')
        .pipe(concat('lib.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-files', function () {
    return gulp.src(['src/**/*.html', 'src/resources/**/*.*'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-inject', function () {
    var target = gulp.src('./dist/index.html');

    var appStream = gulp.src(['./dist/app.min.js', './dist/app.min.css']);

    var vendorStream = gulp.src(['./dist/lib.min.js','./dist/lib.min.css']);

    return target.pipe(inject(series(vendorStream, appStream), {ignorePath: 'dist/', addRootSlash: false}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-dist', function(cb){
    return runSequence('clean-build', 'build-app-js', 'build-app-css', 'build-vendor-js',
        'build-vendor-css', 'copy-files', 'build-inject', cb);
});
//END DIST DASK