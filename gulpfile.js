/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const gulp = require('gulp'),
			del  = require('del')

//simple tasks
//gulp.task('minify html', require('./gulp/minifyHTML'))

gulp.task('clean build', () => del('./build/*'))

gulp.task('compile sass', require('./gulp/compileSASS'))
//gulp.task('minify css', require('./gulp/minifyCSS'))

gulp.task('compile js', require('./gulp/compileJS'))
//gulp.task('minify js', require('./gulp/minifyJS'))

//gulp.task('inline', require('./gulp/inline.js'))

//task groups
//gulp.task('build css', runSequence('compile sass', 'minify css'))
//gulp.task('build js', runSequence('compile js', 'minify js'))
//gulp.task('build html', runSequence('build css', 'build js', 'inline'))

//default task
gulp.task('default', ['clean build', 'compile js', 'compile sass'])