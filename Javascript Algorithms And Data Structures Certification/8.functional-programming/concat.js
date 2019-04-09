  /**
   * Combine Two Arrays Using the concat Method
   * Challenge: Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
   */
  function nonMutatingConcat(original, attach) {
    // Add your code below this line
    return original.concat(attach);
    
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);




  /**
   * Add Elements to the End of an Array Using concat Instead of push.
   * Challenge: Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array..
   */
  function nonMutatingPush(original, newItem) {
    // Add your code below this line
    //return original.push(newItem);
    return original.concat(newItem);
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);