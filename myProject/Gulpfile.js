var gulp = require('gulp'),
      browserify = require('gulp-browserify'),
      sass=require('gulp-sass');

gulp.task('scripts', function () {

    gulp.src(['app/client/index.js','app/client/platform.js','app/client/otherstatics.js','app/client/login.js','app/client/panel.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

 gulp.task('style',function(){
    gulp.src('./app/components/*.scss')
    .pipe(sass())
     .pipe(gulp.dest('./public/'));
 });



// gulp.task('style',function() {
//     gulp.src(['app/components/*.scss'])
//       .pipe()
//     return sass('app/**/*.scss')
//                .pipe(gulp.dest('./public/'));
// });
gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.scss',['style'])
});