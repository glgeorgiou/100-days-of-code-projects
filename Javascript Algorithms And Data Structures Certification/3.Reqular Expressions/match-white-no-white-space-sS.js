/**
 * Regular Expressions: 
 * atch Whitespace. \s
 * Challenge: Change the regex countWhiteSpace to look for multiple whitespace characters in a string..
 */
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/**
 * Match Non-Whitespace Characters.
 * Challenge: hange the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
 */
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);