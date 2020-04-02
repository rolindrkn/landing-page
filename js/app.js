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

// const sectionOne = document.querySelector('#section1');

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

//build the nav
function navigation() {
	for (let item of sections) {
		let section = document.createElement('li');
		// let anchor = document.createElement('a');
		section.className = 'menu__link';
		// anchor.href = `#${item.id}`;
		section.dataset.nav = item.id;
		section.innerText = item.dataset.nav;
		// section.appendChild(anchor);
		navList.appendChild(section);
	}
}

//create IntersectionObserver to observe scrolling
// const options = {
// 	root: null, //viewport
// 	threshold: 0, //0 to 1 scale
// 	rootMargin: '-150px'
// };
// const observer = new IntersectionObserver((entries, observer) => {
// 	entries.forEach((entry) => {
// 		if (!entry.isIntersecting) {
// 			return entry.target.classList.remove('your-active-class');
// 		}
// 		entry.target.classList.add('your-active-class');
// 		// observer.unobserve(entry.target);
// 	});
// }, options);

// sections.forEach((section) => {
// 	observer.observe(section);
// });

//Add class 'active' to section when near top of viewport

// function active() {
// 	window.addEventListener('scroll', (event) => {
// 		for (let section of sections) {
// 			const secTop = section.getBoundingClientRect().top;
// 			const navBarUl = navList;
// 			// const firstList = navBarUl.firstElementChild;
// 			const activeItemName = section.getAttribute('id');
// 			const activeElementIndex = activeItemName.charAt(activeItemName.length - 1) - 1;
// 			const activeElement = navBarUl.children[activeElementIndex];
// 			if (isElementInViewport(section)) {
// 				activeElement.classList.add('your-active-class');
// 			} else {
// 				activeElement.classList.remove('your-active-class');
// 			}

// 			// function isElementInViewport(el) {
// 	const rect = el.getBoundingClientRect();

// 	return (
// 		rect.top >= 0 &&
// 		rect.left >= 0 &&
// 		rect.bottom <=
// 			(window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
// 	);
// }
// 			function isElementInViewport(el) {
// 				const rect = el.getBoundingClientRect();

// 				return {
// 					top: rect.top + window.pageYOffset,
// 					left: rect.left + window.pageXOffset
// 				};
// 			}
// 		}
// 	});
// }

function makeActive() {
	for (const section of sections) {
		const box = section.getBoundingClientRect();
		const active = document.querySelector('li[data-nav="' + section.id + '"]');
		// const menuLink = document.querySelectorAll('menu__link');
		if (box.top <= 150 && box.bottom >= 150) {
			// Apply active state on the current section and the corresponding Nav link.
			section.classList.add('your-active-class');
			//Add "active" class to the Nav link which have a class same as id of the current section
			active.classList.add('active__link');
		} else {
			// Remove active state from other section and corresponding Nav link.
			section.classList.remove('your-active-class');
			//Remove "active" class from the Nav link which have a class same as id of current section
			active.classList.remove('active__link');
		}
	}
}
// Scroll to anchor ID using scrollTO event
// const isSectionVisible = () => {
// 	sections.forEach((section) => {
// 		const sectionId = section.id;
// 		const sectionBottom = section.offsetTop + section.clientHeight;
// 		const isHalfShown = window.scrollY + window.innerHeight - section.clientHeight / 2 > section.offsetTop;
// 		const isNotScrolledPast = window.scrollY < sectionBottom;
// 		const visibleItem = document.querySelectorAll('.menu__link');
// 		for (let item of visibleItem) {
// 			if (isHalfShown && isNotScrolledPast) {
// 				document.querySelector('li[data-nav=" ' + section.id + ' "]').classList.add('is-active');
// 			} else {
// 				document.querySelector('li[data-nav=" ' + section.id + ' "]').classList.remove('is-active');
// 			}
// 		}
// 	});
// };

//Build menu
navigation();

// Scroll to section on link click

function scroll() {
	navList.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector('#' + event.target.dataset.nav).scrollIntoView({
			behavior: 'smooth',
			offsetTop: 20
		});
	});
}

// Set sections as active
window.addEventListener('scroll', function() {
	makeActive();
});
