var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync').create('Myserver');
var gulp = require('gulp');
var gulpBabel = require('gulp-babel');
var source = require('vinyl-source-stream');
var modRewrite = require('connect-modrewrite');
var del = require('del');

function jsBundle(options) {
  return browserify(options.index)
    .transform(babelify)
    .bundle()
    .pipe(source(options.output.file))
    .pipe(gulp.dest(options.output.dir));
}

gulp.task('default', ['move-html', 'move-js', 'watch'], function() {
  browserSync.init({
      server: {
          baseDir: "./dist",
          index: "/index.html",
          middleware: [modRewrite(['!\.html|\.js|\.css|\.png|\.jpg|\.jpeg|\.gif|\.woff|\.ttf|\.bit$ /index.html [L]'])]
      }
  });
});

gulp.task('move-library', function() {
  return gulp.src('./node_modules/**')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('move-html', function() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('move-js', function() {
  return gulp.src('./src/*.js')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['move-html', 'move-js'], function () {
    gulp.watch('./src/*.html' , ['move-html', browserSync.reload]);
    gulp.watch('./src/*.js' , ['move-js', browserSync.reload]);
});
