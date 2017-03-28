var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();
    var  cssPath     = './app/css';
gulp.task('connect', function() {

        var url = 'start http://localhost:' + '8000';

        $.connect.server({
            root: './app/',
            port: 8000,
            livereload: true
        });
        gulp.src('')
            .pipe($.shell(url));
    });
gulp.task('sass', function() {
        return gulp.src('./app/css/*.scss')
            .pipe($.plumber())
            .pipe($.sass())
            .pipe($.autoprefixer('last 3 version'))
            .pipe($.size({
                title: 'css--------------------------------'
            }))
            .pipe(gulp.dest(cssPath));
    });
gulp.task('watch', function() {
	 $.livereload.listen();
	  $.watch('./app/css/**/*.scss', function() {
            gulp.src('./app/css/*.scss')
                .pipe($.plumber())
                .pipe($.sass())
                .pipe($.autoprefixer('last 3 version'))
                .pipe($.size({
                    title: 'css--------------------------------'
                }))
                .pipe(gulp.dest(cssPath))
                .pipe($.livereload());
        });
	   $.watch(['./app/**/*.html','./app/**/*.js'], function () {})
            .pipe($.livereload());
});
 gulp.task('default', ['sass', 'connect', 'watch']);