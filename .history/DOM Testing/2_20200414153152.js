const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];
const ul = document.getElementsByTagName('ul')[0];

//Parent node
console.log('Parent Node of h1 ')
console.log(h1.parentNode)

console.log('Parent Node of parent node of h1 ')
console.log(h1.parentNode.parentNode)


//Child nodes
console.log('Child Nodes of ul ')
console.log(ul.childNodes)