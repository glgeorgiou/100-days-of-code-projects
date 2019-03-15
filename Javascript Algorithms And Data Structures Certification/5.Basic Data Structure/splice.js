/**
 * Modify array elements.
 * https://devdocs.io/javascript/global_objects/array/splice
 * /
 

 /* Challenge: Modify the function, using splice(), so that it returns a value of 10.*/
function sumOfTen(arr) {
    // change code below this line
    arr.splice(2,2);
    // change code above this line
    return arr.reduce((a, b) => a + b);
  }
  
  // do not change code below this line
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


  /*Add items 
  Challenge: We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
  */
 function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    // change code above this line
    return arr;
  } 
   
  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
  
  