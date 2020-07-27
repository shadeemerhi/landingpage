const testElement = document.querySelector('main');
const newSec = document.createElement('section');
newSec.setAttribute("data-nav", "Section 4");
newSec.setAttribute("id", "section4");
const newDiv = document.createElement('div');
newDiv.classList.add('landing__container');
const newHeader = document.createElement('h2');
const newPara = document.createElement('p');
newPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
newHeader.textContent = 'Section 4 - Our Added Section';



newDiv.appendChild(newHeader);
newDiv.appendChild(newPara);
newSec.appendChild(newDiv);
testElement.appendChild(newSec);


const sections = document.querySelectorAll('section');

// This function creates each li element in the navbar and adds an
// anchor link.
function createNavLink (section) {
  const li = document.createElement('li');
  const aElem = document.createElement('a');
  const aLink = `#${section.id}`;
  const name = section.getAttribute("data-nav");
  
  aElem.setAttribute('href', aLink);
  aElem.setAttribute('class', `menu__link ${section.id}`);
  aElem.textContent = name;
  
  li.appendChild(aElem);
  return li;
}

// This function dynamically builds the navigation bar depending on the
// sections that are in the page.
function buildNav () {
  const navList = document.getElementById('navbar__list');
  
  for (const section of sections) {
    const navLink = createNavLink(section);
    navList.appendChild(navLink);
  }
}


// This function contains a nested for loop which is responsible for looping through
// each section to determine which one is active and should be highlighted. The inner
// loop is responsible for finding the corresponding link in the nav bar so that it
// can be highlighted as well.
function findActiveSection () {
  const links = document.getElementsByClassName('menu__link');
  for (const section of sections) {
    const item = section.getBoundingClientRect();
    if (item.top <= 150 && item.bottom >= 150) {
      section.classList.add('your-active-class');
      for (const link of links) {
        if (Boolean(link.classList.contains(section.id))) {
          link.classList.add('active');
        }
        else {
          link.classList.remove('active');
        }
      }
    }
    else {
      section.classList.remove('your-active-class');
    }
  }
}


document.addEventListener('DOMContentLoaded', function () {
  buildNav();
}
)

document.addEventListener('scroll', function () {
  findActiveSection();
}
)


// This function determines which section corresponds to the link that was clicked
// and smoothly scrolls to it.
function scrollingFun (scrollLink) {
  for (const section of sections){
    if (scrollLink.classList[1] === section.id) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
}

// This setTimeout function is utilized to allow the DOM to construct, so that each
// link is not null. It then adds event listeners to each of the navigation links,
// and when one of them is clicked, the element is sent to the function scrollingFun
// to determine which section matches the clicked link.
setTimeout(function addClickEvent() {

  const links = document.getElementsByClassName('menu__link');
  for(const link of links) {
    link.addEventListener('click', function () {
      event.preventDefault();
      scrollingFun(link);
    })
  }
}, 1000);
