// 引用 gulp plugin
var gulp = require('gulp');
    gulpSass = require('gulp-sass'); 

gulp.task('watch', function () {
    gulp.watch('css/sass/*.sass', ['styles']);
});

gulp.task('styles', function () {
    gulp.src('css/sass/*.sass')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass())         // 編譯 Scss
        .pipe(gulp.dest('css'));  // 指定編譯後的 css 檔案目錄
});