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


//Child elements of ul
ul.firstElementChild.style.background = 'purple'
//or
ul.children[0].style.background = 'purple'


//Difference between children and childNodes
console.log('Children of the p tag: child tags only')
console.log(p.children)
console.log('ChildNodes of the p tag: every child element of the p tag.')
console.log(p.childNodes)
document.body.children[3].lastElementChild.style.background = 'pink';


//Next Element Sibling
ul.children[1].nextElementSibling.style.color = 'blue'