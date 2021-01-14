const gulp = require('gulp');
const clean = require('gulp-clean');
const minifyCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', () => {
  const srcCss = ['./css/*'];
  const distCssBuild = './css/';
  const srcClean = ['./css/*.map'];
  gulp.src(srcCss)
    .pipe(autoprefixer('last 99 versions'))
    .pipe(minifyCss())
    .pipe(gulp.dest(distCssBuild));
  return gulp.src(srcClean, { read: false }).pipe(clean());
});
