/**
 * Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.
 */

function sum(arr, n) {
    // Only change code below this line
      if (n<=0) {
          return arr[0];
      } else {
        return sum(arr, n-1)+arr[n];
      }
    // Only change code above this line
  }
  


  /**
   * Countup Function
   */
  function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]



  /**
   * Countdown function
   */
  //Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
      } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
      }
  }
  console.log(countdown(5)); // [5, 4, 3, 2, 1]
  