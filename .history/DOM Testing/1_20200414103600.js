/** 
 * Using js to colorize DOM 
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-1-82433084fb40
 * */

//First paragraph - id
testId = document.getElementById('test');
testId.style.backgroundColor = 'red'


//2nd paragraph - class
testClass = document.getElementsByClassName('test');
//Single element
//testClass[0].style.backgroundColor = 'green'
//Using for
for (i = 0; i < testClass.length; i++) {
    testClass[i].style.backgroundColor = 'green';
  }
  
  
  //By tag name
  testTag = document.getElementsByTagName('section');
for (i = 0; i < testTag.length; i++) {
    testTag[i].style.backgroundColor = 'cyan';
}
