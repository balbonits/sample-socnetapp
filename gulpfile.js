var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
	require('./gulp/'+task);
});

gulp.task('js',function(){
	gulp.src(['ng/module.js','ng/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'));
});

gulp.task('watch:js',['js'],function(){
	gulp.watch('ng/**/*.js',['js']);
});

gulp.task('dev',['watch:css','watch:js','dev:server']);
gulp.task('build',['css','js','dev:server']);