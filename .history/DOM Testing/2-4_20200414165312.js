/**
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-2-bef36405598e
*/

//Which class does first div has
div = document.querySelector('.active');
console.log('The first div has the following class')
console.log(div.classList.value)

// Select div #1
div = document.querySelector('div');
// Assign the alert class to div #1
div.className = 'alert';
console.log('The first div has the following class now')
console.log(div.classList.value)