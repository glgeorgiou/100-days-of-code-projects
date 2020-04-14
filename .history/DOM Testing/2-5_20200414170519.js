/**
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-2-bef36405598e
*/

div = document.querySelector('div');

// Make div into a circle, change color and font size
div.style.borderRadius = '50%';
div.style.backgroundColor = 'lightgreen';
div.style.fontSize = '30px';
console.log('Compare the following style with this in html file:')
console.log(div)