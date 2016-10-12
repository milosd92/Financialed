var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function () {
    return gulp.src([
        './web/bower_components/gentelella/src/scss/custom.scss'
    ]).pipe(sass()).pipe(concat('gentelella-app.css')).pipe(gulp.dest('./web/assets/vendor/css'));
});

gulp.task('scripts', function () {
    return gulp.src([
        './web/bower_components/gentelella/src/js/custom.js',
        './web/bower_components/gentelella/src/js/helper.js'
    ]).pipe(concat('gentelella-app.js')).pipe(gulp.dest('./web/assets/vendor/js'));
});

gulp.task('default', ['styles', 'scripts']);