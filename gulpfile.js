var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'www/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("www/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our www/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/*.js','node_modules/bootstrap/dist/js/*.map', 'node_modules/jquery/dist/*.js', 'node_modules/jquery/dist/*.map', 'node_modules/popper.js/dist/umd/*.js', 'node_modules/popper.js/dist/umd/*.map'])
        .pipe(gulp.dest("www/js"))
        .pipe(browserSync.stream());
});



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  // Static www
  // browserSync.init({
  //   server: {
  //           baseDir: "./www/"
  //       }
  // });

  // Dynamic www
  browserSync.init({
    proxy: "localhost.dev"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'www/scss/*.scss'], ['sass']);
  gulp.watch("www/*.php").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
