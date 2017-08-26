const gulp       = require('gulp');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const uglify     = require('gulp-uglify');
const babel      = require( 'gulp-babel' )
const riotify    = require( 'riotify' )

gulp.task('build', function (cb) {
  browserify({
    entries: ['src/main.js']
  })
  .transform( riotify )
  .bundle()
  .pipe(source('main.min.js'))
  .pipe(buffer())
  .pipe( babel( {
    presets: [ 'es2015' ]
  } ) )
  .pipe(uglify())
  .pipe(gulp.dest('js'))
  .on('end', cb);
})
