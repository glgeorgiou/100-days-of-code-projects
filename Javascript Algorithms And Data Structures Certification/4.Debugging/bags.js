/**
 * Syntax errors
 */

 //From
 //let myArray = [1, 2, 3;
 //   let arraySum = myArray.reduce((previous, current =>  previous + current);
    console.log(`Sum of array values is: ${arraySum}`);

 //To
 let myArray = [1, 2, 3];
let previous=0;
let current=0;
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);



/**
 * Double and singled quotes
 */
//let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
let innerHtml = "<p>Click here to <a href=#Home>return home</a></p>";
console.log(innerHtml);



/**
 *CCatch Missing Open and Closing Parenthesis After a Function Call.
 Challenge: Fix the code so the variable result is set to the value returned from calling the function getNine.
 */
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);



  /**
   * Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. 
   */
  function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    //for (let i = 1; i <= len; i++) {
    for (let i = 0; i < len; i++) {
    // Do not alter code below this line
      console.log(firstFive[i]);
    }
  }
    countToFive();


    /**
     * Infinite loop.
     * Challenge: Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.
     */
    function myFunc() {
        //for (let i = 1; i != 4; i += 2) {
        for (let i = 1; i <= 4; i += 2) {
          console.log("Still going!");
        }
      }