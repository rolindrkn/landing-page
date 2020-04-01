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
<<<<<<< HEAD

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
=======

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
	}
}
>>>>>>> fd9fcd815c4381244c3f6450bc752c3efd14fee8

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

//build the nav
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
	}
}

//Add class 'active' to section when near top of viewport
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

			// function isElementInViewport(el) {
			// 	const rect = el.getBoundingClientRect();

			// 	return (
			// 		rect.top >= 0 &&
			// 		rect.left >= 0 &&
			// 		rect.bottom <=
			// 			(window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
			// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
			// 	);
			// }
			function isElementInViewport(el) {
				const rect = el.getBoundingClientRect();
			  
				return {
				  top: rect.top + window.pageYOffset,
				  left: rect.left + window.pageXOffset,
				};
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
<<<<<<< HEAD
// Scroll to anchor ID using scrollTO event


//Build menu
navigation();
=======
// // Scroll to anchor ID using scrollTO event
>>>>>>> fd9fcd815c4381244c3f6450bc752c3efd14fee8

// Scroll to section on link click

<<<<<<< HEAD
// Set sections as active
active();
=======
// Build menu
navigation();
>>>>>>> fd9fcd815c4381244c3f6450bc752c3efd14fee8


<<<<<<< HEAD
// const navbar = document.querySelector('#navbar__list');
// const sections = document.querySelectorAll('section');
// const header = document.querySelector('.page__header');


// /**
//  * End Global Variables
//  * Start Helper Functions
//  * 
//  */

// // Set sections as active
// const setActive = target => {
//     document.querySelector('.your-active-class').classList.remove('your-active-class');
//     target.classList.add('your-active-class');
// };

// /**
//  * End Helper Functions
//  * Begin Main Functions
//  * 
//  */

// // build the nav
// const navBuilder = () => {
//     for (let section of sections) {
//         let temp = `<li class="menu__link">${section.querySelector('h2').innerText}</li>`;
//         navbar.innerHTML += temp;
//     };
//     navbar.classList.toggle('hidden');
// };

// // Add class 'active' to section when near top of viewport
// document.addEventListener('scroll', e => {
//     for (const key in sections) {
//         if (window.pageYOffset >= (sections[key].offsetTop - 400)) {
//             setActive(sections[key]);
//         }
//     }
// });

// // Build menu 
// navBuilder();



// // Scroll to section on link click
// navbar.addEventListener('click', e => {
//     let targetSect = document.querySelector(`[data-nav="${e.target.innerText}"]`);
//     window.scrollTo(0, targetSect.offsetTop);
//     navbar.classList.add('hidden');
// })

// // show or hide the navigation
// header.firstElementChild.addEventListener('click', () => {
//     navbar.classList.toggle('hidden');
// })
=======
// // Set sections as active
active();


>>>>>>> fd9fcd815c4381244c3f6450bc752c3efd14fee8
