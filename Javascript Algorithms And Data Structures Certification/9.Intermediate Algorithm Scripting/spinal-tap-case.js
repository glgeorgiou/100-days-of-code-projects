/**
 * https://devdocs.io/javascript/global_objects/string/replace
 * Challenge: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {

    // Create a variable for the white space and underscores.
      var regex = /\s+|_+/g;
    
      // Replace low-upper case to low-space-uppercase
      /**he first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on. */
      str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    
      // Replace space and underscore with -
      return str.replace(regex, '-').toLowerCase();
    }
    
    spinalCase('This Is Spinal Tap');

    /**
     * spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
        spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"
     */