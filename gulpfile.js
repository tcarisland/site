var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('copy-html', function() {
    return gulp.src('src/index.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
    return gulp.src(['src/js/*.js', '!src/js/deps.js'])
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

var depslist = ['node_modules/jquery/dist/jquery.min.js', 'node_modules/svg.js/dist/svg.min.js'];

gulp.task('concat-deps-js', function() {
    return gulp.src(depslist)
	  .pipe(concat('deps.js'))
	  .pipe(uglify())
	  .pipe(gulp.dest('dist'));
});

gulp.task('deps-to-src', function() {
    return gulp.src([depslist])
	.pipe(concat('deps.js'))
	.pipe(gulp.dest('src/js'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-html', 'concat-deps-js', 'minify-js')));
