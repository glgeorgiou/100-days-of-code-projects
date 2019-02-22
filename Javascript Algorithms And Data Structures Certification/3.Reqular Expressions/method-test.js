/**
 * Regular Expressions: Using the Test Method.
 * One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not..
 * Challenge: Apply the regex myRegex on the string myString using the .test() method.
*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);