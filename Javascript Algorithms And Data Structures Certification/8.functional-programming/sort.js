/**
 * Sort an Array Alphabetically using the sort Method.
 * Challenge: Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
 */
function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort();
    
    // Add your code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



  /**
   * Return a Sorted Array Without Changing the Original Array.
   * Challenge: Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
   */
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArr = []
  return newArr.concat(arr).sort();
  
  // Add your code above this line
}
nonMutatingSort(globalArray);