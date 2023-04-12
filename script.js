
console.log("object")
// this is a swiper js=======================
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navbar static

// Get the navbar element
var navbar = document.getElementById("navbar");

// Get the initial position of the navbar
var navbarOffsetTop = navbar.offsetTop;

// Add an event listener for the window scroll event
window.onscroll = function () {
  // Get the current scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the scroll position is greater than or equal to the navbar's initial position
  if (scrollPosition >= navbarOffsetTop) {
    navbar.classList.add("fixed");

  } else {
    navbar.classList.remove("fixed");

  }
};

/// nav toggle of

var nav = document.querySelector('.nav');
var menu = document.querySelector('#menu-bars');

menu.addEventListener('click', function () {
  nav.classList.toggle('active');
})

