/**
 * Check if a value is classified as a boolean primitive. Return true or false.
 */
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof(bool)=="boolean") {
      return true;
    }
    return false;
    //typeof(bool)=="boolean" ? bool= true: bool =  false;
    return bool;
  }
  
  booWho(null);