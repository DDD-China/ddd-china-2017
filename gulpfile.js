var gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    fileinclude = require('gulp-file-include'),
    minifyjs = require('gulp-js-minify');

gulp.task('watch', gulp_sequence(['watch_html', 'watch_js']));


gulp.task('watch_html', function () {
    gulp.watch(['includes/*.html', 'src/*.html', 'src/speakers/*.html'], ['include_index', 'include_speakers']);
})

gulp.task('watch_js', function () {
    gulp.watch(['webContent/js/*.js', 'webContent/js/speakers/*.js'], ['minify-js-index', 'minify-js-speakers']);
});


gulp.task('include_index', function () {
    gulp.src('src/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('webContent'));
});

gulp.task('include_speakers', function () {
    gulp.src('src/speakers/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('webContent/speakers/'));
});

gulp.task('minify-js-index', function () {
    gulp.src('webContent/js/*.js')
        .pipe(minifyjs())
        .pipe(gulp.dest('webContent/js/lib/'));
});

gulp.task('minify-js-speakers', function () {
    gulp.src('webContent/js/speakers/*.js')
        .pipe(minifyjs())
        .pipe(gulp.dest('webContent/js/lib/'));
});