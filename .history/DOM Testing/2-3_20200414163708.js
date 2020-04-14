/**
 * Source: https://medium.com/@timothyrobards/javascript-fundamentals-master-the-dom-part-2-bef36405598e
*/

// Assign image element and log it
const image = document.querySelector('img');
image.hasAttribute('src');       // true
image.getAttribute('src');       // returns the src link
console.log('The src before the change is:');
console.log(image);
image.removeAttribute('src');    // removes the src
image.setAttribute('src', 'https://res.cloudinary.com/trobes/image/upload/c_scale,w_400/v1549941322/after.png');