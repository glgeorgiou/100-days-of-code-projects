/**
 * Use the every Method to Check that Every Element in an Array Meets a Criteria
 * array.every() - https://devdocs.io/javascript/global_objects/array/every
 * Challenge: Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
 */
function checkPositive(arr) {
    // Add your code below this line
    return arr.every(function(currVal) {
        return currVal>0;
    });
    
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);