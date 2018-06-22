var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


// task html
gulp.task('html', function(){ 
	return gulp.src('src/templates/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('build/'))
}); 

// task sass
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src('src/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
});


gulp.watch('src/assets/scss/**/*.scss', ['sass']);

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
            baseDir: "./build"
        }
	});
});

gulp.task('default',['html','sass', 'scripts', 'browser-sync'], function() {
})
