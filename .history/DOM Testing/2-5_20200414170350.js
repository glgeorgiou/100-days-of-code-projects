/**
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-2-bef36405598e
*/

//Style before
div1 = document.querySelector('div');
console.log('The style of the box before:')
console.log(div1)

// Make div into a circle, change color and font size
div1 = document.querySelector('div');
div1.style.borderRadius = '50%';
div1.style.backgroundColor = 'lightgreen';
div1.style.fontSize = '30px';
console.log('The style of the box After:')
console.log(div1)