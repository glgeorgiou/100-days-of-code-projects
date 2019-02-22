/**
 * Regular Expressions: Match Ending String Patterns. You can search the end of strings using the dollar sign character $ at the end of the regex.
 * Challenge: Use the anchor character ($) to match the string "caboose" at the end of the string caboose.
 */
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);