
//=============== MOBILE MENU TOGGLE FUNCTIONALITY ===============*/
/**
 * Mobile Navigation Menu Control
 * Handles opening and closing the mobile navigation menu on header
 */

// Get DOM elements for navigation menu, toggle, and close button
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/**
 * Show menu function - Adds 'show-menu' class when toggle button is clicked
 * This makes the mobile navigation menu visible by sliding it down
 */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/**
 * Hide menu function - Removes 'show-menu' class when close button is clicked
 * This hides the mobile navigation menu by sliding it back up
 */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/**
 * Close menu when nav link is clicked
 * Ensures menu closes automatically when user selects a navigation link
 */
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HOME SECTION SCRIPTS ===============*/
// All home section functionality is handled by inline scripts in HTML


/*=============== INTRO & CARD SECTION - GSAP ANIMATIONS ===============*/
/**
 * Advanced scroll animations using GSAP ScrollTrigger and Lenis
 * Creates smooth scrolling and synchronized animations for card section
 */

document.addEventListener("DOMContentLoaded", function() {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    /* ---========= Lenis Smooth Scrolling ==========--- */
    /**
     * Lenis: Smooth scrolling library
     * Provides butter-smooth scrolling experience on the entire page
     */
    const lenis = new Lenis();
    window.lenis = lenis; // Expose Lenis globally for modal control
    // Update ScrollTrigger on every Lenis scroll event
    lenis.on("scroll", ScrollTrigger.update);
    // Integrate GSAP ticker with Lenis for synchronization
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    /* ---========= Variables & State ==========--- */
    /**
     * State variables to track animation completion status
     */
    const cardContainer = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');

    let isGapAnimationComplete = false;  // Track if gap animation is done
    let isFlipAnimationComplete = false; // Track if flip animation is done

    /* ---========= ScrollTrigger Animations Timeline ==========--- */
    /**
     * First Timeline: Gap and Position Animation
     * Animates card spacing and positions as user scrolls
     * Triggers when user scrolls to the #sticky section
     */
    const gapTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#sticky",
            start: "top top",     // Start when section reaches top
            end: "top top+=500",  // End after 500px of scrolling
            scrub: 1,             // Smooth animation tied to scroll
            pin: true,            // Pin section while animating
            markers: false        // Hide debug markers
        }
    });
    
    // Animate card container gap and individual card positions
    gapTl
        .to(cardContainer, { gap: 30, duration: 1, ease: "power3.out" }, 0)  // Increase gap between cards
        .to("#card-1", { x: -30, duration: 1, ease: "power3.out" }, 0)       // Move left card left
        .to("#card-3", { x: 30, duration: 1, ease: "power3.out" }, 0)        // Move right card right
        .to(cards, { borderRadius: 20, duration: 1, ease: "power3.out" }, 0); // Round card corners

    /* ---========= Flip Animation Timeline ==========--- */
    /**
     * Second Timeline: Card Flip Animation
     * Flips cards to reveal back content (company values)
     * Staggered timing creates sequential flip effect
     */
    const flipTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#sticky",
            start: "center top+=330",     // Start when center scrolls down
            end: "center top+=1000",      // End after 1000px more scrolling
            scrub: 3,                     // Slower scrub for dramatic effect
            pin: true,                    // Pin section while animating
            markers: false                // Hide debug markers
        }
    });
    
    // Flip all cards with staggered timing
    flipTl
        .to(
            ".card",
            { 
                rotationY: 180,           // Flip 180 degrees on Y axis
                duration: 1, 
                ease: "power3.inOut",
                stagger: 0.1,             // 0.1s delay between each card flip

                transformOrigin: "center center",  // Flip from center point
            },
            0  // Start immediately
        )
        // Side cards tilt and move up slightly
        .to(
            ["#card-1", "#card-3"],
            {
                y: 30,                        // Move up
                rotationZ: (i) => (i === 0 ? -15 : 15), // Tilt left/right
                duration: 1,
                ease: "power3.inOut",
            },
            0  // Synchronize with flip
        );
});


/*=============== ABOUT & OTHER SECTIONS - SCROLL REVEAL ===============*/
/**
 * Scroll Reveal Animation Function
 * Adds 'active' class to elements when they scroll into viewport
 * Creates staggered animation effect for reveal-r, reveal-l, reveal-t, reveal-d classes
 */
function reveal() {
    // Get all elements with reveal animation classes
    var reveals = document.querySelectorAll(".reveal-r, .reveal-l, .reveal-t, .reveal-d, .skill-reveal-l");
  
    for (var i = 0; i < reveals.length; i++) {
      // Get window height for viewport calculation
      var windowHeight = window.innerHeight;
      // Get distance from top of element to top of viewport
      var elementTop = reveals[i].getBoundingClientRect().top;
      // Trigger animation when element is 150px from bottom of viewport
      var elementVisible = 150;
  
      // If element is within visible range, add active class to trigger animation
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

// Initialize reveal on page load
document.addEventListener("DOMContentLoaded", function() {
    
    // Throttle scroll events for better performance using requestAnimationFrame
    let ticking = false;
    window.addEventListener("scroll", function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                reveal();  // Check and animate reveal elements
                ticking = false;
            });
            ticking = true;
        }
    });
});


/*=============== BUTTON CLICK HANDLERS ===============*/
/**
 * Button Click Event Listeners
 * Handles clicks on action buttons throughout the page
 * Currently logs navigation to console (can be extended for tracking)
 */
document.querySelectorAll('.read-more, .btn-main').forEach(button => {
    button.addEventListener('click', (e) => {
        // Log button click for analytics or debugging
        console.log("Navigating to service details...");
        // Uncomment below to prevent default link navigation
        // e.preventDefault();
    });
});
