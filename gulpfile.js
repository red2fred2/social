const gulp        = require('gulp'),
			runSequence = require('run-sequence'),
			del					= require('del')

//import external code
const MinifyHTML  = require('./gulp/minifyHTML'),
			CompileSCSS = require('./gulp/compileSCSS'),
			MinifyCSS   = require('./gulp/minifyCSS'),
			CompileJS   = require('./gulp/compileJS'),
			MinifyJS    = require('./gulp/minifyJS'),
			Inline      = require('./gulp/inline.js')

//////////////////////////////////////////////////////////////////////

//simple tasks
gulp.task('minify html', MinifyHTML('./build/', './build/'))

gulp.task('clean build', () => del('./build/**'))

gulp.task('compile sass', CompileSCSS('./source/', './build/'))
gulp.task('minify css', MinifyCSS('./build/', './build/'))

gulp.task('compile js', CompileJS('./source/', './build/'))
gulp.task('minify js', MinifyJS('./build/', './build/'))

gulp.task('inline', Inline('./build/', './view/'))

//task groups
gulp.task('build css', runSequence('compile sass', 'minify css'))
gulp.task('build js', runSequence('compile js', 'minify js'))
gulp.task('build html', runSequence('build css', 'build js', 'inline'))

gulp.task('default', runSequence('clean build', 'build html'))