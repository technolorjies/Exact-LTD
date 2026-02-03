

// Mobile Navigation Menu Control
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show mobile menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide mobile menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when a nav link is clicked
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

// GSAP Card Section Animations (Gap and Flip)
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  // Lenis smooth scrolling
  const lenis = new Lenis();
  window.lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
  const cardContainer = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.card');
  // Card gap and position animation
  const gapTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#sticky",
      start: "top top",
      end: "top top+=500",
      scrub: 1,
      pin: true,
      markers: false
    }
  });
    

  gapTl
    .to(cardContainer, { gap: 30, duration: 1, ease: "power3.out" }, 0)
    .to("#card-1", { x: -30, duration: 1, ease: "power3.out" }, 0)
    .to("#card-3", { x: 30, duration: 1, ease: "power3.out" }, 0)
    .to(cards, { borderRadius: 20, duration: 1, ease: "power3.out" }, 0);

  // Card flip animation
  const flipTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#sticky",
      start: "center top+=330",
      end: "center top+=1000",
      scrub: 3,
      pin: true,
      markers: false
    }
  });
  flipTl
    .to(
      ".card",
      {
        rotationY: 180,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1,
        transformOrigin: "center center"
      },
      0
    )
    .to([
      "#card-1",
      "#card-3"
    ], {
      y: 30,
      rotationZ: (i) => (i === 0 ? -15 : 15),
      duration: 1,
      ease: "power3.inOut"
    }, 0);
});




// Scroll Reveal Animation: Adds 'active' class to elements in view
function reveal() {
  var reveals = document.querySelectorAll(".reveal-r, .reveal-l, .reveal-t, .reveal-d, .skill-reveal-l");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        reveal();
        ticking = false;
      });
      ticking = true;
    }
  });
});



// Button Click Event Listeners: Logs navigation (extend as needed)
document.querySelectorAll('.read-more, .btn-main').forEach(button => {
  button.addEventListener('click', (e) => {
    console.log("Navigating to service details...");
  });
});


// Accordion & Content Swapping for Expertise Section
const items = document.querySelectorAll('.item');
const images = document.querySelectorAll('.stage-frame img');
const para__card = document.getElementById('para__card');
const overlay = document.getElementById('overlay');
const overlayTag = document.getElementById('overlay-tag');
const overlayDesc = document.getElementById('overlay-desc');
items.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      const currentIndex = Array.from(items).indexOf(item);
      const nextIndex = (currentIndex + 1) % items.length;
      const nextItem = items[nextIndex];
      items.forEach(i => i.classList.remove('active'));
      images.forEach(img => img.classList.remove('active'));
      overlay.classList.remove('active-overlay');
      nextItem.classList.add('active');
      const targetImg = document.getElementById(nextItem.dataset.img);
      if (targetImg) targetImg.classList.add('active');
      setTimeout(() => {
        overlayTag.innerText = nextItem.dataset.tag;
        overlayDesc.innerText = nextItem.dataset.desc;
        overlay.classList.add('active-overlay');
        overlay.style.transform = 'translateZ(400px) translateY(0)';
      }, 150);
      return;
    }
    items.forEach(i => i.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));
    overlay.classList.remove('active-overlay');
    item.classList.add('active');
    const targetImg = document.getElementById(item.dataset.img);
    if (targetImg) targetImg.classList.add('active');
    setTimeout(() => {
      overlayTag.innerText = item.dataset.tag;
      overlayDesc.innerText = item.dataset.desc;
      overlay.classList.add('active-overlay');
      overlay.style.transform = 'translateZ(400px) translateY(0)';
    }, 150);
  });
});
document.querySelector('.content').addEventListener('mouseleave', () => {
  overlay.style.transform = 'translateZ(180px)';
});
// 3D Physics (Tilt + Shadow)
window.addEventListener('mousemove', (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 100;
  para__card.style.transform = `rotateY(${x}deg)`;
  let shadowX = x * -2;
  overlay.style.boxShadow = `${shadowX}px 0 80px rgba(0,0,0,0.8)`;
});
window.addEventListener('mouseleave', () => {
  para__card.style.transform = `rotateY(0deg)`;
  overlay.style.boxShadow = `0 40px 80px rgba(0,0,0,0.7)`;
});
overlay.classList.add('active-overlay');



// Typed.js: Animated typing for hero section
var typed = new Typed('#typed-element', {
  strings: ["Engineering Excellence", "Technical Solutions", "Safety Compliance"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});
// ScrollReveal: Animate elements on scroll
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 800,
  delay: 0,
  reset: true,
  easing: 'ease-out'
});
sr.reveal('.home__title', { origin: 'top', delay: 0 });
sr.reveal('.home__description', { origin: 'right', delay: 400 });
sr.reveal('.home__data .button', { origin: 'top', delay: 400 });
sr.reveal('.home__image', { origin: 'left', delay: 400 });
sr.reveal('.card__img', { origin: 'bottom', delay: 400 });
// ScrollOut: Animate elements on scroll (alternative)
ScrollOut();
ScrollOut({ targets: ".animate-me", once: true });
// Splitting.js: Split text for animation
Splitting();
// GSAP + ScrollMagic: Animate element on scroll
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger",
  duration: 300
})
  .setTween("#animate", { x: 100, opacity: 0 })
  .addTo(controller);
// Home Image Auto-Switcher: Alternate hero images
const homeImg = document.querySelector('.home__img');
let isImg1 = false;
homeImg.style.transition = 'opacity 0.8s ease-in-out';
function switchImage() {
  homeImg.style.opacity = '0';
  setTimeout(() => {
    if (isImg1) {
      homeImg.src = 'assets/img/home-img.png';
    } else {
      homeImg.src = 'assets/img/home-img1.png';
    }
    isImg1 = !isImg1;
    homeImg.style.opacity = '1';
  }, 400);
}
setInterval(switchImage, 20000);
// ScrollMagic: Typewriter effect on scroll for intro text
var myText = "We are Exact Services Limited";
let myTextLength = myText.length;
function typing(displayedLength) {
  if (displayedLength <= myTextLength) {
    $("#intro-text").text(myText.substring(0, displayedLength));
  }
}
var controller2 = new ScrollMagic.Controller();
var typewritingOnScroll = new TimelineMax();
var typewritingScene = new ScrollMagic.Scene({
  triggerElement: "#intro-text",
  duration: 300
})
  .on('progress', function () {
    let scrollProgress = Math.ceil(typewritingScene.progress() * myTextLength);
    typing(scrollProgress);
  })
  .setPin('#intro-text')
  .setTween(typewritingOnScroll)
  .addTo(controller2);
// About Modal: Open/close modal and accessibility
const aboutModal = document.getElementById('aboutModal');
const aboutReadMoreBtn = document.getElementById('about-read-more');
const closeAboutModalBtn = document.getElementById('closeAboutModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
aboutReadMoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  aboutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  document.body.style.height = '100vh';
  document.documentElement.style.height = '100vh';
  if (window.lenis) {
    window.lenis.stop();
  }
  closeAboutModalBtn.focus();
});
function closeModal() {
  aboutModal.classList.remove('active');
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
  document.body.style.height = 'auto';
  document.documentElement.style.height = 'auto';
  if (window.lenis) {
    window.lenis.start();
  }
  aboutReadMoreBtn.focus();
}
closeAboutModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && aboutModal.classList.contains('active')) {
    closeModal();
  }
});
modalContent.addEventListener('wheel', (e) => {
  e.stopPropagation();
}, { passive: true });
modalContent.addEventListener('touchmove', (e) => {
  e.stopPropagation();
}, { passive: true });
