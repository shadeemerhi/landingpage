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

/**
 * Creating the new section and all of its child elements.
 */
const elMain = document.querySelector('main');
const newSec = document.createElement('section');
newSec.setAttribute("data-nav", "Section 4");
const newDiv = document.createElement('div');
newDiv.classList.add('landing__container');
const newHeader = document.createElement('h2');
const newPara = document.createElement('p');
newPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
newHeader.textContent = 'Section 4 - Our Added Section';

newDiv.appendChild(newHeader);
newDiv.appendChild(newPara);
newSec.appendChild(newDiv);
elMain.appendChild(newSec);

const sections = document.querySelectorAll('section');





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createNavLink (section) {
    const li = document.createElement('li');
    const aElem = document.createElement('a');
    const aLink = `#${section.id}`;
    const name = section.getAttribute("data-nav");
    
    aElem.setAttribute("href", aLink);
    aElem.setAttribute("class", `menu__link ${section.id}`);
    aElem.textContent = name;
    
    li.appendChild(aElem);
    return li;
}

function buildNav () {
    const navList = document.getElementById('navbar__list');
    
    for (const section of sections) {
      const navLink = createNavLink(section);
      navList.appendChild(navLink);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.addEventListener('DOMContentLoaded', function () {
    buildNav();
    }
)


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