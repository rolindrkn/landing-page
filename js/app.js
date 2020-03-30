/**
  *
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  *
//  * Dependencies: None
//  *
//  * JS Version: ES2015/ES6
//  *
//  * JS Standard: ESlint
//  *
// */

// /**
//  * Define Global Variables
//  *
// */
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const nav = document.querySelector('.navbar__menu');

// /**
//  * End Global Variables
//  * Start Helper Functions
//  *
// */

// /**
//  * End Helper Functions
//  * Begin Main Functions
//  *
// */

// build the nav
function navigation() {
	for (let item of sections) {
		let section = document.createElement('li');
		section.className = 'list-item';
		section.dataset.nav = item.id;
		section.innerText = item.dataset.nav;
		navList.appendChild(section);
	}
}

//prevent default
navList.addEventListener('click', function(event) {
	event.preventDefault();
});
// // Add class 'active' to section when near top of viewport
// function activeClass() {

// 	for (let activeElem of sections) {
// 		let bounding = activeElem.getBoundingClientRect();
// 		if (
// 			bounding.top >= 0 &&
// 			bounding.left >= 0 &&
// 			bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
// 			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
// 		) {
// 			activeElem.className == 'active';
// 	     } else {
// 			activeElem.className = '';
// 		}
// }

function active() {
	window.addEventListener('scroll', (event) => {
		let fromTop = window.scrollY;
		nav.forEach((link) => {
			let section = document.querySelector(link.hash);
			for (let item of sections) {
				if (sections.getBoundingClientRect().top < 100) {
					link.classList.add('active-class');
				} else {
					link.classList.remove('active-class');
				}
			}
		});
	});
}

// Scroll to section on link click
let topOfNav = nav.offsetTop;
function fixNav() {
	if (window.scrollY >= topOfNav) {
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	} else {
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = 0;
	}
}
window.addEventListener('scroll', fixNav);
// Scroll to section on link click
window.scrollTo({
	top: 100,
	left: 100,
	behavior: 'smooth'
});

// Build menu
window.onload = navigation();

// Set sections as active
active();
