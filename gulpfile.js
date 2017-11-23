const gulp = require('gulp');
const g_svg2png = require('gulp-svg2png');

gulp.task('numbers', function() {
	return gulp.src('./src/numbers/*.svg')
	.pipe(g_svg2png({
		width: 100
	}))
	.pipe(gulp.dest('./dist/numbers'));
});

gulp.task('default', ['numbers']);

process.on('unhandledRejection', function(reason) {
	console.error("Unhandled rejection:", reason);
	process.exit(1);
});
