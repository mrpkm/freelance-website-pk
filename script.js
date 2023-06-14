

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


// ---------------------
var optionsSelect = document.getElementById('options-select');
var defaultContent = document.getElementById('default-content');
var contentOption1 = document.getElementById('content-option1');
var contentOption2 = document.getElementById('content-option2');
var contentOption3 = document.getElementById('content-option3');

optionsSelect.addEventListener('change', function () {
  var selectedOption = optionsSelect.value;
  hideAllContent();
  if (selectedOption === 'default') {
    defaultContent.style.display = 'block';
  } else if (selectedOption === 'option1') {
    contentOption1.style.display = 'block';
  } else if (selectedOption === 'option2') {
    contentOption2.style.display = 'block';
  } else if (selectedOption === 'option3') {
    contentOption3.style.display = 'block';
  }
});

function hideAllContent() {
  defaultContent.style.display = 'none';
  contentOption1.style.display = 'none';
  contentOption2.style.display = 'none';
  contentOption3.style.display = 'none';
}




