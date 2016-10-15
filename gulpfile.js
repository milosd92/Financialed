var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var components_root = './web/bower_components/gentelella';

var vendor_assets_src = components_root + '/vendors';
var vendor_assets_dest = './web/assets/vendor';

gulp.task('styles', function () {

    // Bootstrap
    gulp.src([
        vendor_assets_src + '/bootstrap/dist/css/bootstrap.css'
    ]).pipe(concat('bootstrap.css')).pipe(gulp.dest(vendor_assets_dest + '/css'));

    // Font-Awesome
    gulp.src([
        vendor_assets_src + '/font-awesome/css/font-awesome.css'
    ]).pipe(concat('font-awesome.css')).pipe(gulp.dest(vendor_assets_dest + '/css'));

    // Application-custom
    return gulp.src([
        components_root + '/src/scss/custom.scss'
    ]).pipe(sass()).pipe(concat('gentelella-app.css')).pipe(gulp.dest(vendor_assets_dest + '/css'));
});

gulp.task('scripts', function () {

    // jQuery
    gulp.src([
        vendor_assets_src + '/jquery/dist/jquery.js'
    ]).pipe(gulp.dest(vendor_assets_dest + '/js'));

    // Bootstrap
    gulp.src([
        vendor_assets_src + '/bootstrap/dist/js/bootstrap.js'
    ]).pipe(gulp.dest(vendor_assets_dest + '/js'));

    // Application-custom
    return gulp.src([
        components_root + '/src/js/custom.js',
        components_root + '/src/js/helper.js'
    ]).pipe(concat('gentelella-app.js')).pipe(gulp.dest(vendor_assets_dest + '/js'));
});

gulp.task('fonts', function () {

    // Font awesome
    gulp.src([
        vendor_assets_src + '/font-awesome/fonts/fontawesome-webfont.*'
    ]).pipe(gulp.dest(vendor_assets_dest + '/fonts'));

    // Glyphicons
    return gulp.src([
        vendor_assets_src + '/bootstrap/fonts/glyphicons-halflings-regular.*'
    ]).pipe(gulp.dest(vendor_assets_dest + '/fonts'));
});

gulp.task('default', ['styles', 'scripts', 'fonts']);