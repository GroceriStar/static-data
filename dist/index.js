'use strict';



/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
  return number.toLocaleString(locale);
}

// var path        = '/data/simple/';
// let Allergy     = require(path + 'allergies.js')
// let Courses     = require(path + 'courses.js')
// let Cuisines    = require(path + 'cuisines.js')
// let Diets       = require(path + 'Diets/diets.js')
// let Holidays    = require(path + 'holidays.js')
// let Ingredients = require(path + 'Ingredients4/Ingredients.js')
//
// console.log(Allergy);

// module.exports.searchForm = a;
