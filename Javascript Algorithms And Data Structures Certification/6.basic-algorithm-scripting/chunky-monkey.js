/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
 */

function chunkArrayInGroups(arr, size) {
    // Break it up.
   var temp = [];
        var result = [];
  
        for (var a = 0; a < arr.length; a++) {
          if (a % size !== size - 1)
            temp.push(arr[a]);
          else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
          }
        }
  
        if (temp.length !== 0)
          result.push(temp);
        return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

  //Intermediate solution
  /**
   * function chunkArrayInGroups(arr, size) {
      // Break it up.
      var arr2 = [];
      for (var i = 0; i < arr.length; i+=size) {
    	arr2.push(arr.slice(i , i+size));
      }
      return arr2;
    }
   */