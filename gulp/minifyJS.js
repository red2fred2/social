/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp  = require('gulp'),
      jsmin = require('gulp-jsmin')

//constants
const
			SELECTOR_STRING = 'main.js'

//////////////////////////////////////////////////////////////////////

module.exports = function(inputFolder, outputFolder) {
  gulp.src(inputFolder + SELECTOR_STRING)
	.pipe(
    jsmin()
  )
	.pipe(
    gulp.dest(outputFolder)
  )
}
