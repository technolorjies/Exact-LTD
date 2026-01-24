/*=============== SHOW MENU ===============*/
// Get DOM elements for navigation menu, toggle, and close button
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/**
 * Show menu function - Adds 'show-menu' class when toggle button is clicked
 * This makes the mobile navigation menu visible
 */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/**
 * Hide menu function - Removes 'show-menu' class when close button is clicked
 * This hides the mobile navigation menu
 */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== REMOVE MENU MOBILE ===============*/
// Select all navigation links
const navLink = document.querySelectorAll('.nav__link')

/**
 * Link Action function - Closes the mobile menu when a nav link is clicked
 * This improves UX by automatically closing the menu after navigation
 */
const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
// Add click listener to each navigation link to trigger menu close
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== ADD SHADOW HEADER ===============*/
/**
 * scrollHeader function - Adds shadow effect to header when page is scrolled
 * Triggers when scrollY is greater than or equal to 50 pixels
 * Enhances visual hierarchy by indicating scroll position
 */
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .shadow-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
// Attach scroll listener to call scrollHeader on every scroll event
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL-BASED SLIDE IN/OUT ANIMATIONS ===============*/
/**
 * Scroll Animation Handler - Manages fade in/out animations for elements
 * Animates elements when they enter/exit the viewport during scrolling
 */
document.addEventListener('DOMContentLoaded', () => {
   const scrollElements = document.querySelectorAll('.scroll-animate');
   
   /**
    * elementInView function - Determines if an element is visible in the viewport
    * @param {HTMLElement} el - The element to check
    * @param {number} dividend - Viewport height divisor for detection sensitivity (default: 1)
    * @returns {boolean} True if element is in viewport, false otherwise
    */
   const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
         elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
   };

   /**
    * elementOutOfView function - Checks if element has scrolled out of viewport
    * @param {HTMLElement} el - The element to check
    * @returns {boolean} True if element is below viewport, false otherwise
    */
   const elementOutOfView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop > window.innerHeight;
   };

   /**
    * displayScrollElements function - Toggles animation classes based on scroll position
    * Adds 'scrolled-in' class when element enters viewport
    * Adds 'scrolled-out' class when element leaves viewport
    * This triggers CSS animations defined in the stylesheet
    */
   const displayScrollElements = () => {
      scrollElements.forEach((element) => {
         if (elementInView(element, 1.25)) {
            element.classList.add('scrolled-in');
            element.classList.remove('scrolled-out');
         } else if (elementOutOfView(element)) {
            element.classList.remove('scrolled-in');
            element.classList.add('scrolled-out');
         }
      });
   };

   // Attach scroll listener and perform initial check
   window.addEventListener('scroll', displayScrollElements);
   displayScrollElements(); // Initial check on page load
});


/*=============== SWIPER PRICES ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

