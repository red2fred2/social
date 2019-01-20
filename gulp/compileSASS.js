/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const gulp   = require('gulp'),
			sass   = require('gulp-sass')
module.exports = () =>
gulp.src('./source/sass/app.sass')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./build/css'))