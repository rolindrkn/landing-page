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
		let anchor = document.createElement('a');
		anchor.href = `#${item.id}`;
		section.className = 'list-item';
		section.dataset.nav = item.id;
		anchor.innerText = item.dataset.nav;
		// section.innerText = item.dataset.nav;
		section.appendChild(anchor);
		navList.appendChild(section);
		const x = section.getBoundingClientRect();
		console.log(x);
	}
}

// Add class 'active' to section when near top of viewport
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

// function active() {
// 	window.addEventListener('scroll', (event) => {
// 		for (let section of sections) {
// 			const secTop = section.getBoundingClientRect().top;
// 			// console.log(secTop);
// 			const navBarUl = navList;
// 			const firstList = navBarUl.firstElementChild;
// 			if (isElementInViewport(section)) {
// 				// const navBarUl = navList;
// 				//const firstList = navBarUl.firstElementChild;
// 				firstList.classList.add('your-active-class');
// 			} else {
// 				firstList.classList.remove('your-active-class');
// 			}
// 			function isElementInViewport(el) {
// 				let rect = el.getBoundingClientRect();

// 				return (
// 					rect.top >= 0 &&
// 					rect.left >= 0 &&
// 					rect.bottom <=
// 						(window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
// 					rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
// 				);
// 			}
// 		}
// 	});
// }

function active() {
	window.addEventListener('scroll', (event) => {
		for (let section of sections) {
			const secTop = section.getBoundingClientRect().top;
			const navBarUl = navList;
			const firstList = navBarUl.firstElementChild;
			const activeItemName = section.getAttribute('id');
			const activeElementIndex = activeItemName.charAt(activeItemName.length - 1) - 1;
			const activeElement = navBarUl.children[activeElementIndex];
			if (isElementInViewport(section)) {
				activeElement.classList.add('your-active-class');
			} else {
				activeElement.classList.remove('your-active-class');
			}

			function isElementInViewport(el) {
				const rect = el.getBoundingClientRect();

				return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <=
						(window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
				);
			}
		}
	});
}
// fixed nav
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
// Scroll to anchor ID using scrollTO event
window.scrollTo({
	top: 100,
	left: 100,
	behavior: 'smooth'
});

// Build menu
navigation();

// Scroll to section on link click

// Set sections as active
active();
