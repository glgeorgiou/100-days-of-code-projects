/**
 * A variable defined using 'let' keyword cannot redefined using 'let' keyword again.
 */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();