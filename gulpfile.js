var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('copy-html', function() {
    return gulp.src('src/index.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
    return gulp.src(['src/js/*.js'])
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-html', 'minify-js')));
