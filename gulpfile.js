var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function () {

    // Bootstrap
    gulp.src([
        './web/bower_components/gentelella/vendors/bootstrap/dist/css/bootstrap.css'
    ]).pipe(concat('bootstrap.css')).pipe(gulp.dest('./web/assets/vendor/css'));

    // Font-Awesome
    gulp.src([
        './web/bower_components/gentelella/vendors/font-awesome/css/font-awesome.css'
    ]).pipe(concat('font-awesome.css')).pipe(gulp.dest('./web/assets/vendor/css'));

    // Application-custom
    return gulp.src([
        './web/bower_components/gentelella/src/scss/custom.scss'
    ]).pipe(sass()).pipe(concat('gentelella-app.css')).pipe(gulp.dest('./web/assets/vendor/css'));
});

gulp.task('scripts', function () {

    // jQuery
    gulp.src([
        './web/bower_components/gentelella/vendors/jquery/dist/jquery.js'
    ]).pipe(gulp.dest('./web/assets/vendor/js'));

    // Application-custom
    return gulp.src([
        './web/bower_components/gentelella/src/js/custom.js',
        './web/bower_components/gentelella/src/js/helper.js'
    ]).pipe(concat('gentelella-app.js')).pipe(gulp.dest('./web/assets/vendor/js'));
});

gulp.task('fonts', function () {

    // Font awesome
    gulp.src([
        './web/bower_components/gentelella/vendors/font-awesome/fonts/fontawesome-webfont.*'
    ]).pipe(gulp.dest('./web/assets/vendor/fonts'));

    // Glyphicons
    return gulp.src([
        './web/bower_components/gentelella/vendors/bootstrap/fonts/glyphicons-halflings-regular.*'
    ]).pipe(gulp.dest('./web/assets/vendor/fonts'));
});

gulp.task('default', ['styles', 'scripts', 'fonts']);