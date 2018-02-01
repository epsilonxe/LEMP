var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'www/src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("www/src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our www/src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/popper.js/dist/popper.js'])
        .pipe(gulp.dest("www/src/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./www/src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'www/src/scss/*.scss'], ['sass']);
    gulp.watch("www/src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
