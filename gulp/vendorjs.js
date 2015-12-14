var concat = require('gulp-concat');

gulp.task('vendorjs', function () {

    return gulp.src(config['vendorjs']['src'])

        .pipe(concat(config['vendorjs']['dst']))
        .on('error', onErrors)


        .pipe(gulp.dest(config['public']));
});