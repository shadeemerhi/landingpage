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



function buildNav () {
  const navList = document.getElementById('navbar__list');
  
  for (const section of sections) {
    const navLink = createNavLink(section);
    navList.appendChild(navLink);
  }
}



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


// Created this test function to try and scroll to section 2 when clicking on section 1 in the nav bar - DOES NOT WORK AS IS RIGHT NOW.
function scrollingFun (scrollLink) {
  for (const section of sections){
    if (scrollLink.classList[1] === section.id) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
}


// Trying to add the 'click' event listener to button 1 - testing to try scrolling to section 2 - DOES NOT WORK AS IS RIGHT NOW.
setTimeout(function addClickEvent() {
  const link1 = document.querySelector('.section1');
  link1.addEventListener('click', function (){
  event.preventDefault();
  scrollingFun(link1);
  })
  
  const link2 = document.querySelector('.section2');
  link2.addEventListener('click', function (){
  event.preventDefault();
  scrollingFun(link2);
  })
  
  const link3 = document.querySelector('.section3');
  link3.addEventListener('click', function (){
  event.preventDefault();
  scrollingFun(link3);
  })
  
  const link4 = document.querySelector('.section4');
  link4.addEventListener('click', function (){
  event.preventDefault();
  scrollingFun(link4);
  })
}, 1000);
