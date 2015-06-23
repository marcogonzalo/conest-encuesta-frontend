var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    bower = require('gulp-bower'),
    filesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject'),
    merge = require('merge-stream'),
    watch = require('gulp-watch'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    annotate = require('gulp-ng-annotate'),
    wiredep = require('wiredep').stream;

var globs = {
    styles: 'app/styles/**/*.css',
    html: 'app/**/*.html',
    js: 'app/scripts/**/*.js',
    assets: [
        './app/fonts/**/*',
        './app/images/**/*',
        './app/views/**/*'
    ]
};


gulp.task('bower', function () {
    return bower({ cmd: 'install' })
        .pipe(gulp.dest('app/bower_components'));
});

gulp.task('wiredep', ['bower'], function () {
    return gulp.src('app/index.html')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app/'));
});

gulp.task('inject', ['wiredep'], function () {
    var js = gulp.src(globs.js).pipe(filesort());
    var scss = gulp.src(globs.styles);
    return gulp.src('app/index.html')
        .pipe(inject(merge(js, scss), {
            relative: true
        }))
        .pipe(gulp.dest('app/'));
});

gulp.task('serve', ['inject'], function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        port: 5000,
        ui: {
            port: 5001
        }
    });


    gulp.watch('app/bower_components', ['bower']);

    watch(globs.js, function (vinyl) {
        if (vinyl.event !== 'change') {
            injectFiles();
        } else {
            reload();
        }
    });

    gulp.watch(globs.styles)
        .on('change', reload);
    gulp.watch(globs.html)
        .on('change', reload);
});

gulp.task('mv', function () {
    return gulp.src(globs.assets, { base: 'app' })
        .pipe(gulp.dest('dist/'));
});

gulp.task('usemin', function () {
    return gulp.src('app/index.html')
        .pipe(usemin({
            css: [minifycss(), 'concat'],
            app: [annotate(), uglify()],
            vendor: [uglify()]
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['usemin', 'mv']);

gulp.task('deploy', ['build'], function () {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        port: 5010,
        ui: {
            port: 5011
        }
    });
})

gulp.task('default', ['serve']);