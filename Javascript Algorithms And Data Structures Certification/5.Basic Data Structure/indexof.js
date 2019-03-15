/**
 * https://devdocs.io/javascript/global_objects/array/indexof
 * Challenge: Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
 */
function quickCheck(arr, elem) {
    // change code below this line
    return arr.indexOf(elem)>=0 ? true : false;
    // change code above this line
  }
  
  // change code here to test different cases:
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));
