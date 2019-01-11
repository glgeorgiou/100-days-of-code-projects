/**
 * A delcared array with const cannot be re-declared. You can change array's values.
 */
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0]=2;
  s[1]=5;
  s[2]=7;

  // change code above this line
}
editInPlace();