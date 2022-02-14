const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function style(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist:["cover 99.5%", "last 2 versions", "dead", "maintained node versions", "Firefox ESR","since 2015", "unreleased versions", "not ie <=8"],
        cascade:false
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream());
}

function watch(){
    browsersync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browsersync.reload);
    gulp.watch('./js/**/*.js').on('change', browsersync.reload);
}
exports.style = style;
exports.watch = watch;