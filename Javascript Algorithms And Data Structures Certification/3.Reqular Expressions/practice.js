/**
 * Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
 */
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);




/**
 * Restrict Possible Usernames.
 * Challenge:
 * 1) The only numbers in the username have to be at the end. There can be zero or more of them at the end. /\d*$/;
 * 2) Username letters can be lowercase and uppercase. /\d*$/i;
 * 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters. /^[a-z]{2,}\d*$/i;
 */