/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const gulp   = require('gulp'),
			del    = require('del'),
      concat = require('gulp-concat'),
			sass   = require('gulp-sass'),
      minifyjs = require('gulp-minify')

//tasks
gulp.task('clean', ()=>
          del('./build/*')
         )

gulp.task('compile js', ['clean'], ()=>
          gulp.src('./source/js/*.js')
          .pipe(concat('app.js'))
          .pipe(gulp.dest('./build/js/'))
         )

gulp.task('compile sass', ['clean'], ()=>
          gulp.src('./source/sass/app.sass')
          .pipe(sass())
          .pipe(gulp.dest('./build/css'))
         )

gulp.task('minify js', ['compile js'], ()=>
          gulp.src('./build/js/app.js')
          .pipe(minifyjs())
          .pipe(gulp.dest('./build/jsmin'))
         )

//gulp.task('minify css', require('./gulp/minifyCSS'))
//gulp.task('inline', require('./gulp/inline.js'))
//gulp.task('minify html', require('./gulp/minifyHTML'))

//default task
gulp.task('default', ['clean', 'compile js', 'compile sass', 'minify js'])