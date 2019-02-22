/**
 * https://devdocs.io/javascript/global_objects/string/match
 * 
 *  You can also extract the actual matches you found with the .match() method.
 * Challenge: Apply the .match() method to extract the word coding.
 */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line