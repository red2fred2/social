/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp    = require('gulp'),
      cssmin = require('gulp-cssmin')

//constants
const
			SELECTOR_STRING = '*.css'

//////////////////////////////////////////////////////////////////////

module.exports = function(inputFolder, outputFolder) {
  gulp.src(inputFolder + SELECTOR_STRING)
	.pipe(
    cssmin()
  )
	.pipe(
    gulp.dest(outputFolder)
  )
}
