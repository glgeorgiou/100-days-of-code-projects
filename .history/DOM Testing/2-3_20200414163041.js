/**
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-2-bef36405598e
*/

//Create a new dom list element
list = document.querySelector('ul');
newItem = document.createElement('li');
newItem.textContent = 'A new appended list item'
list.appendChild(newItem);


//Insert a first list item using parent node
let anotherNewItem = document.createElement('li')
anotherNewItem.textContent = 'A new first list item'
list.insertBefore(anotherNewItem, list.firstElementChild);


//Replace existing item
let modifiedItem = document.createElement('li');
modifiedItem.textContent = "Initial list item modified";
list.replaceChild(modifiedItem, list.children[3])


//Remove the last list item
// list.lastElementChild.remove()