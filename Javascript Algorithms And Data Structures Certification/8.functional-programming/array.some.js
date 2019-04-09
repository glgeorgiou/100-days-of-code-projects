/**
 * array.some() - Use the some Method to Check that Any Elements in an Array Meet a Criteria.
 * https://devdocs.io/javascript/global_objects/array/some
 * Challenge: Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
 */
function checkPositive(arr) {
    // Add your code below this line
    return arr.some(function(currVal) {
          return currVal>0;
      });
    
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);