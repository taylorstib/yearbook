var gulp = require('gulp');
var imagemin = require('gulp-imagemin')
var minifyHTML = require('gulp-minify-html');

// Compress images
gulp.task('default', function(){
  gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'));
  });

// Minify HTML 
gulp.task('minify-html', function() {
  var opts = {
    spare:true
  };
 
  return gulp.src('index.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('build/'));
});