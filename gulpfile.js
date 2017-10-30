var gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    rename = require('gulp-rename'),
    fileinclude = require('gulp-file-include'),
    minifyjs = require('gulp-js-minify'),
    less = require('gulp-less');

var webRoot = "docs/";

gulp.task('watch', gulp_sequence(['watch_html', 'watch_js', 'watch_css']));


gulp.task('watch_html', function () {
    gulp.watch(['includes/*.html', 'src/**/*.html'], ['include_index', 'include_speakers', 'include_workshop']);
})

gulp.task('watch_js', function () {
    gulp.watch([webRoot + 'js/*.js', webRoot + 'js/speakers/*.js'], ['minify-js-index', 'minify-js-speakers']);
});

gulp.task('watch_css', function () {
    gulp.watch(webRoot + 'css/*.less', ['compile-less']);
})

gulp.task('include_index', function () {
    gulp.src('src/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRoot));
});

gulp.task('include_speakers', function () {
    gulp.src('src/speakers/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRoot + 'speakers/'));
});

gulp.task('include_workshop', function () {
    gulp.src('src/workshop/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRoot + 'workshop/'));
});

gulp.task('minify-js-index', function () {
    gulp.src([webRoot + 'js/*.js', '!' + webRoot + 'js/*.min.js'])
        .pipe(minifyjs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(webRoot + 'js/lib'));
});

gulp.task('minify-js-speakers', function () {
    gulp.src([webRoot + 'js/speakers/*.js', '!' + webRoot + 'js/speakers/*.min.js'])
        .pipe(minifyjs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(webRoot + 'js/lib/'));
});

gulp.task('compile-less', function () {
    gulp.src(webRoot + 'css/*.less')
        .pipe(less())
        .pipe(gulp.dest(webRoot + 'css/'))
})
