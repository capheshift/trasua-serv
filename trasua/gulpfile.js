var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

var path = {
  app: 'app',
  dist: 'dist',
  public: 'public/**/*.*',
  vendor: 'vendor/**/*.*',
  styles: 'app/styles/*.*'
};

gulp.task('browserify', function() {
  gulp.src(path.app + '/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.dist));
});

gulp.task('copy', function() {
  gulp.src([path.app + '/index.html', path.public, path.styles, path.vendor])
    .pipe(gulp.dest(path.dist));
});

gulp.task('watch', function() {
  gulp.watch(path.app + '/**/*.*', ['browserify', 'copy']);
});

gulp.task('default', ['browserify', 'copy', 'watch']);

