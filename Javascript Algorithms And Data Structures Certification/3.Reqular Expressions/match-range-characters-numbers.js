/**
 * Regular Expressions: Match Letters of the Alphabet [a-z].
 * Challenge: Match all the letters in the string quoteSample.
 */
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line



/**
 * Regular Expressions: Match Numbers and Letters of the Alphabet.
 * Challenge: Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
 */
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


/**
 * Specify Exact Number of Matches. Letter 'A' 2 times: A{2}.
 * Challenge: Change the regex timRegex to match the word "Timber" only when it has four letter m's.
 */
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);