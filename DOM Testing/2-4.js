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


// Select div #2 by its class name
activeDiv = document.querySelector('.active');

// Add the hidden class
activeDiv.classList.add('hidden');   
console.log('The 2nd div has the following class')
console.log(activeDiv.classList.value)
   
// Remove the hidden class
activeDiv.classList.remove('hidden'); 
console.log('The 2nd div after removing the hidden class')
console.log(activeDiv.classList.value)

// Switch between hidden true and false
activeDiv.classList.toggle('hidden');
console.log('The 2nd div after Switch between hidden true and false')
console.log(activeDiv.classList.value)

// Replace active class with alert class
activeDiv.classList.replace('active', 'alert');
console.log('The 2nd div Replace active class with alert class')
console.log(activeDiv.classList.value)