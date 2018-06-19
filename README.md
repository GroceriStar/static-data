## Recipes static data

!https://travis-ci.org/GroceriStar/static-data.svg?branch=master!:https://travis-ci.org/GroceriStar/static-data


@TODO use different flags for one command in order to call different imports
https://docs.npmjs.com/cli/run-script
https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633

```npm run test -- --arg="search"```

@TODO add tests

```
"migrate-grocery": "node bin/grocery/002-automigrate.js",
"migrate-search": "node bin/search/automigrate.js",
"migrate-recipes": "node bin/recipes/002-automigrate.js",
"import": "node bin/recipes/001-import.js",
"grocery": "node bin/grocery/001-import.js",
"search": "node bin/search/import.js",
"g": "npm run migrate-grocery && nodemon bin/grocery/import.js",
"r": "npm run migrate-recipes && nodemon bin/recipes/import.js",
"s": "npm run migrate-search  && nodemon bin/search/import.js",
"g2": "npm run migrate-grocery && node bin/grocery/import.js",
"r2": "npm run migrate-recipes && node bin/recipes/import.js",
"s2": "npm run migrate-search  && node bin/search/import.js"
```

## Synopsis

Recipe related static data, like ingredients, recipes, diets, allergies, etc.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

In a few our projects we have a similar files. And we always copy-paste code between them. So by moving this code into separated place - i hope we'll make our projects better.


## Installation

Provide code examples and explanations of how to get the project.
`npm install @groceristar/static-data`

## Usage

```
var data = require('@groceristar/static-data');
console.log(data);
```

```
import data from '@groceristar/static-data'
```

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

`npm test`


## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.




#### Old

```
let table_name = 'Allergy'

const get = () => {

    var data     = [
          {

               "name":"Gluten-Free",

               "type":"allergy",

          }
     ];

  	return data;

};
module.exports.get   = get;
```
