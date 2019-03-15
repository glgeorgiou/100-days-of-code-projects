/**
 * Remove array elements
 * https://devdocs.io/javascript/global_objects/array/shift
 * https://devdocs.io/javascript/global_objects/array/pop
 * Challenge: We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array.
 */
function popShift(arr) {
    let popped = arr.pop();// change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
  }
  
  // do not change code below this line
  console.log(popShift(['challenge', 'is', 'not', 'complete']));