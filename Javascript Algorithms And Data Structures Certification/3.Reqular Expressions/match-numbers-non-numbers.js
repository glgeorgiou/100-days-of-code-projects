/**
 * Regular Expressions: 
 * Match All Numbers - \d
 * Challenge: Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
 */
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/gi; // Change this line
let result = numString.match(numRegex).length;


/**
 * Match All Non-Numbers - \D
 * Challenge: Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
 */
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/gi; // Change this line
let result = numString.match(noNumRegex).length;