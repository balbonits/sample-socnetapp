var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css',function(){
	gulp.src('css/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'));
});

gulp.task('watch:css',['css'],function(){
	gulp.watch('css/**/*.less',['css']);
});