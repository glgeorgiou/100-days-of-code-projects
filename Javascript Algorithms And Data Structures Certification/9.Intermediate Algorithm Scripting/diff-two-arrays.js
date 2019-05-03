/**
 * Diff Two Arrays.
 * https://devdocs.io/javascript/global_objects/array/filter
 * https://devdocs.io/javascript/global_objects/array/concat
 * https://devdocs.io/javascript/global_objects/array/includes
 * Challenge: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 */
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(
      item => !arr1.includes(item) || !arr2.includes(item)
    );
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);