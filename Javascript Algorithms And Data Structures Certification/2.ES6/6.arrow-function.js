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