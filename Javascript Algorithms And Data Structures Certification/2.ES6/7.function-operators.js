/**
 * Using default variable values
 * function (variable=value) {
 * ....
 * }
 */
const increment = (function() {
    "use strict";
    return function increment(number, value=1) {
      return number + value;
    };
  })();
  
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6



  /***
   * The Rest Operator. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
   */

   //Before
   const sum = (function() {
    "use strict";
    return function sum(x, y, z) {
      const args = [ x, y, z ];
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6

   //After
   const sum = (function() {
    "use strict";
    return function sum(...args) {
     
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6


  /**
   * Spread Operator. Evaluate Arrays in place.
   * ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
   * However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
   * Copy all contents of arr1 into another array arr2 using the spread operator.
   */
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    (function() {
    "use strict";
    arr2 = [...arr1]; // change this line
    })();
    console.log(arr2);