/**
 * Regular Expressions: 
 * Specify Upper and Lower Number of Matches {lowerNumber, upperNumber}
 * Challenge: Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
 */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);


/**
 * Specify Only the Lower Number of Matches.
 * Challenge: Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
 */
let haStr = "Hazzzzah";
let haRegex = /Haz{4,30}ah/;  // Change this line
let result = haRegex.test(haStr);