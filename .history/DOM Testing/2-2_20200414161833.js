/**
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-2-bef36405598e
 */

 //Create a new dom list element
 list = document.querySelector('ul');
 newItem = document.createElement('li');
 newItem.textContent = 'A new appended list item'
 list.appendChild(newItem);