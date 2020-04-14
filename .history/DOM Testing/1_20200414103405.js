/** Using js to colorize DOM */

//First paragraph
testId = document.getElementById('test');
testId.style.backgroundColor = 'red'


//2nd paragraph
testClass = document.getElementsByClassName('test');
//Single element
//testClass[0].style.backgroundColor = 'green'
//Using for
for (i = 0; i < testClass.length; i++) {
    testClass[i].style.backgroundColor = 'green';
  }