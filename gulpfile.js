var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
    return gulp.src("script.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("."));
});

var sass = require('gulp-sass')
sass.compiler = require('node-sass')

gulp.task('hello', function(done) {
    console.log('hello')
    done()
})

gulp.task('sass', function(done) {
    return gulp.src('stylesheet.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
    done()
})

gulp.task('sass:watch', function(done) {
    gulp.watch('*.scss', gulp.series('sass'))
    done()
})
