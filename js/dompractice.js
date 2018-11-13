// Traverse the DOM

// Use the firstElementChild property to print the h2 
// in the section to the console
var h2 = document.getElementById('content').firstElementChild;
console.log(h2);

// Use the lastElementChild property to log the last 
// paragraph in the section to the console
var lastParagraph = document.getElementById('content').lastElementChild;
console.log(lastParagraph);

// Use the parentNode property to log the h2’s 
// parent section to the console 
var sectionContent = h2.parentNode;
console.log(sectionContent);

// Use the children property to log the group of child 
// elements of the section to the console
console.log(sectionContent.children);

// Target Nodes and Change Content / Attributes

// Retrieve the content of the h1 node using innerHTML 
// and log the content to the console
var h1 = document.getElementById('title');
console.log(h1.innerHTML);

// Change the content actually shown on the page for 
// the h1 node to “Updated Page Title” using innerHTML
h1.innerHTML = 'Updated Page Title';

// Retrieve the value of the id attribute on h1 using 
// firstElementChild and the element property id and log it
// to the console
var header = document.getElementById('site-header');
console.log(header.firstElementChild.id);

// Change the value of the id attribute on h1 to “new-title” 
// using firstElementChild and the element property id
header.firstElementChild.id = 'new-title';

// Changing Items in the DOM:

// Use the appendChild method to add a new <p> node inside 
// the section.
var newP = document.createElement('p');
sectionContent.appendChild(newP);

// Use the removeChild method to remove the <p> node in the 
// aside.
var aside = document.getElementById('tangent');
aside.removeChild(aside.firstElementChild);

// Use the replaceChild method to replace a the h2 in 
// the section with an h3 with the value “New Heading”
var h3 = document.createElement('h3');
h3.innerHTML = "New Heading";
sectionContent.replaceChild(h3, h2);





