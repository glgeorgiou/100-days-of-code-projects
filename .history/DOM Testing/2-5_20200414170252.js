/**
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-2-bef36405598e
*/

//Style before
div = document.querySelector('div');
console.log('The style of the box before:')
console.log(div)

// Make div into a circle, change color and font size
div.style.borderRadius = '50%';
div.style.backgroundColor = 'lightgreen';
div.style.fontSize = '30px';
console.log('The style of the box After:')
console.log(div)