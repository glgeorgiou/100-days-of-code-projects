/**
 * Regular Expressions: Positive and Negative Lookahead.
 * Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
 * Challenge: Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
 */
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);