'use strict';

/**
 * Adds commas to a number
*/
module.exports = function(number, locale) {
  return number.toLocaleString(locale);
}
