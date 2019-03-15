/**
 * Return a copy of array elements
 * https://devdocs.io/javascript/global_objects/array/slice
 * Challenge: We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.
 */

function forecast(arr) {
    // change code below this line
    return arr.slice(2,4);
  }
  
  // do not change code below this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));