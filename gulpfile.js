var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('html', function() {
	console.log("imagine a task");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/post_ap_css/styles'));
});



gulp.task('watch', function() {

	watch('./app/assets/index.html', function() {
		gulp.start('html');
});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});

