const hamburgerMenu = document.querySelector(".hamburger-button");
const navigation = document.querySelector(".header-panel");

//Hamburger Menu Toggle
hamburgerMenu.onclick = function() {
  document.body.classList.toggle("lock");
  hamburgerMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains("hamburger-button")
  && !e.target.closest(".header-panel")
  || e.target.classList.contains("nav-link")) {
    document.body.classList.remove("lock");
    navigation.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
})

//Slider

const container = document.querySelector(".slider-wrapper");
const slider = document.querySelector(".slider-inner");
const slide = document.querySelector(".slide");
const next = document.querySelector(".slider-arrow-right");
const prev = document.querySelector(".slider-arrow-left");

let offset = 0;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// let offset = 0;

function nextSlide() {
  offset++;

  if (offset == 3) {
    offset = 0;
  }

  switchSlide();
}

function prevSlide() {
  // offset--;

  if (offset == 0) {
    offset = 2;
  } else {
    offset--;
  }
  switchSlide();
}

function switchSlide() {
  slider.style.left = ((-slide.offsetWidth - 25) * offset) + 'px';
}

setInterval(function() {
  nextSlide();
}, 7000)
