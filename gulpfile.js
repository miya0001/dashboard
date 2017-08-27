const gulp       = require('gulp');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const uglify     = require('gulp-uglify');
const babel      = require( 'gulp-babel' )
const riotify    = require( 'riotify' )
const sass        = require( 'gulp-sass' )

gulp.task( 'build', (cb) => {
  browserify( {
    entries: [ 'src/main.js' ]
  } )
  .transform( riotify )
  .bundle()
  .pipe( source( 'main.min.js' ) )
  .pipe( buffer() )
  .pipe( babel( {
    presets: [ 'es2015' ]
  } ) )
  .pipe(uglify())
  .pipe( gulp.dest( 'js' ) )
  .on('end', cb );
})

gulp.task( 'css', () => {
  gulp.src( [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
  ] )
		.pipe( gulp.dest( 'css' ) )
} )

gulp.task( 'fonts', () => {
  gulp.src( [
    'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.*'
  ] )
	.pipe( gulp.dest( 'fonts' ) )
} )

gulp.task( 'sass', () => {
  return gulp.src( './src/style.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( './css' ) )
} )

gulp.task( 'default', [
  'build',
  'css',
  'sass',
  'fonts'
] )
