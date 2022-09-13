/**
 * Document Object Model:
 * Tree of nodes/elements created by the browser
 * Javascript can be used to read/write/manipulate the DOM
 * Object Oriented Representation
 * The browser has a woindows object within which we have the Documment Object and it contains the root element, which is the HTML tag
 */

// Examine the document Object;
// gives the domain
console.log(document.domain);
//gives the url
console.log(document.url);
//gives the title of the page
console.log(document.title);
// gives the doctype
console.log(document.doctype);
// gives the head
console.log(document.head);
// gives an array of everything in the DOM
console.log(document.all);
// gives an array of all the forms in the DOM
console.log(document.forms);

//SELECTORS IN DOM
// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
// changes the text content in it
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";

/**
 * The difference between innerText and innerContent is that innerText pays attention to the styles applied on the element
 * Eg : if the display is set to none, innerContent will show Nothing, whereas innerText will still slow the text underneath
 */

// adds html elements
headerTitle.innerHTML = '<h3>Hello<h3>';
// changes style
headerTitle.style.borderBottom = 'solid 3px black';

//GETELEMENTSBYCLASSNAME
const items = document.getElementsByClassName('list-group-item');
/**
 * This command gives us a list of HTML collections
 * we can get individual one using the index like items[1]
 * WE have to loop through to apply changes to each one of the items
 */

//GETELEMENTSBYTAGNAME
const items1 = document.getElementsByTagName('li');
/**
 * This command gives back a collection of li tags in the Document
 */

//QUERYSELECTOR
const header = document.querySelector('.header');
/**
 * This command gets the first element that matches the query
 * WE can use any CSS selector inside the queryselector
 */

//QUERYSELECTORALL
const titles = document.querySelectorAll('.title');
/**
 * This command gets a list of all elements that matches the query
 * WE can use any CSS selector inside the queryselector
 * This returns a Node List, a node list takes all the array methods
 */

//TRAVERSING THE DOM

 /**
  * Parent,Child,Siblings Difference - Parent encapsulates the Child elements whereas siblings are elements which are on the same level as the Neighbouring elements
  */

 const itemList = document.querySelector('#items');
 // ParentNode
 // we can chain the parentNode property to get all the parents from the selected component
 console.log(itemList.parentNode.parentNode);
 // ParenElement
 //It is same as the parentNode

 //childNodes
 console.log(itemList.childNodes);
 /**
  * The text node is the line break
  * The childNodes property will return an array of Node list thhat includes the text node
  */

 // children
 console.log(itemList.children);

 /**
  * The children property will return an array of Node list without the line break text nodes
  */

// FirstElementChild
console.log(itemList.firstElementChild);
/**
 * This gives the first li tag
 */

// lastElementChild\
console.log(itemList.lastElementChild);
/**
 * This gives the last li tag
 */

// nextElementSibling
console.log(itemList.nextElementSibling)

/**
 * Gives the next sibling to the selected element
 */

// previousElementSibling
console.log(itemList.previousElementSibling)

/**
 * Gives the previous sibling to the selected element
 */

// createElement

const newDiv = document.createElement('div');
// Add Class
newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';
//Add attribute
newDiv.setAttribute('title', 'Hello Div');
//Create text node
const newDivText = document.createTextNode('Hello World')
//Add text to div
newDiv.appendChild(newDivText);

// we selct the container and element before which we want insert our newly created element
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1')

// insert the newly created element
container.insertBefore(newDiv, h1);

/**
 * This creates a new element
 */

// Events in the DOM

// var button = document.getElementById('button').addEventListener('click', buttnClick);

function buttnClick(e) {
  console.log('Button Clicked');
  //gets the target element that was clicked
  console.log(e.target);
  // returns the target element's classes in the form of an array
  console.log(e.target.classList)
  // the event object has a bunch of properties  that we can use
  // to check we are holding some other key while clicking
  console.log(e.altKey);

}

//Different mouse Events

/**
 * click
 * dblclick - double click
 * mousedown 
 * mouseup 
 * mouseenter
 * mouseleave
 * mouseover - mouse over is also for inner child elements
 * mouseout
 * mousemove 
 */

var button = document.getElementById('button').addEventListener('click', buttnClick);


// keyboard and input events
/**
 * keydown - everytime any key in the keyboard is pressed this event is fired
 * keyup
 * keypress 
 * focus - when we click inside an input 
 * blur - 
 * cut - 
 * paste - 
 * input - whatever we do inside an input
 * onChange - fires when the initial value is changed
 * submit 
 */

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent)

function runEvent (e) {
  //prevents the default
  e.preventDefault();
  console.log('Event Type' + e.type);
  // to capture all the typed items in the input
  console.log(e.target.value);

}
