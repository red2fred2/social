/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const gulp   = require('gulp'),
			del    = require('del'),
      concat = require('gulp-concat'),
			sass   = require('gulp-sass'),
      minjs  = require('gulp-minify'),
      mincss = require('gulp-cssmin'),
      inline = require('gulp-inline')


//tasks
gulp.task('clean build', ()=> del('./build/*'))

gulp.task('compile js', ['clean build'], ()=>
          gulp.src('./source/js/*.js')
          .pipe(concat('app.js'))
          .pipe(gulp.dest('./build/js/'))
         )

gulp.task('compile sass', ['clean build'], ()=>
          gulp.src('./source/sass/app.sass')
          .pipe(sass())
          .pipe(gulp.dest('./build/css'))
         )

gulp.task('minify js', ['compile js'], ()=>
          gulp.src('./build/js/app.js')
          .pipe(minjs())
          .pipe(gulp.dest('./build/js'))
         )

gulp.task('minify css', ['compile sass'], ()=>
          gulp.src('./build/css/app.css')
          .pipe(mincss())
          .pipe(gulp.dest('./build/cssmin'))
         )

gulp.task('clean view', ()=> del('./view/*'))

gulp.task('inline', ['minify css', 'minify js'], ()=>
          gulp.src('./source/html/index.html')
          .pipe(inline({base: 'build/'}))
          .pipe(gulp.dest('./view'))
         )

gulp.task('minify service worker', ['inline'], ()=>
          gulp.src('./source/service worker/serviceworker.js')
          .pipe(minjs(
            {ext:{
              src:'-debug.js',
              min:'.js'
            }}
          ))
          .pipe(gulp.dest('./view'))
         )


//default task
gulp.task('default', ['inline', 'minify service worker'])