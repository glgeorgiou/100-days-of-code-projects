/**
 * Regular Expressions: Match All Letters and Numbers. Character /w .
 * Challenge: Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
 */
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line 
let result = quoteSample.match(alphabetRegexV2).length;



/**
 * Regular Expressions: Match Everything But Letters and Numbers. Character /W.
 * Challenge : Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings..
 */
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;