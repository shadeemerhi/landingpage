/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const testElement = document.querySelector('main');
const newDiv = document.createElement('div');
newDiv.classList.add('landing__container');
const newHeader = document.createElement('h2');
const newPara = document.createElement('p');
newPara.textContent = 'This is the new paragraph we created using JavaScript';
newHeader.textContent = 'Section 4 - Our Added Section';


newHeader.appendChild(newPara);
newDiv.appendChild(newHeader);
testElement.appendChild(newDiv);






/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active