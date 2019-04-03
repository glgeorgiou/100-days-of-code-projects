/**
 * Understand the Immediately Invoked Function Expression (IIFE)
 * Challenge: Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
 */
//From
function makeNest() {
    console.log("A cozy nest is ready");
  }
  
  makeNest(); 

  //To
  (function() {
    console.log("A cozy nest is ready");
  })(); // The two parentheses cause the function to be immediately invoked



/**
 *Use an IIFE to Create a Module.
  Challenge: Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
 */
//From
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };

  //To
  let funModule = (function() { 
    return {
      isCuteMixin: function(obj) {
            obj.isCute = function() {
            return true;
          };
      },

      singMixin: function(obj) {
          obj.sing = function() {
            console.log("Singing to an awesome tune");
          };
      }
    }
})();
/**
 * Usage:
 funModule.isCuteMixin(objectName);
 objectName.isCute();
 */