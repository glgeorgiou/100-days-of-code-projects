/**
 * epeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 */
function repeatStringNumTimes(str, num) {
    // repeat after me
      var accumulatedStr = '';
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);