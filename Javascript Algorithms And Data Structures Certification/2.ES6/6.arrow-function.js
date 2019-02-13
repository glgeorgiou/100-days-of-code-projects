/**
 * syntax: variable = () => {
 * ....
 * return ...;
 * }
 * syntax with return only: variable = () => expression
 */

 /* A standard function syntax*/
 /*var magic = function() {
  "use strict";
  return new Date();
};*/


/*Arrow function with body*/
const magic = () => {
    return new Date();
   }

/*Arrow function only with return*/
let magic = () => new Date();


/* Passing parameters */
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));