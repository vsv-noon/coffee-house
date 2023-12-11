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
const switchActiveStatusButtons = document.querySelectorAll(".pagination-btn-span");
const switchButton = document.querySelectorAll(".pagination-btn");

let offset = 0;
let step = 0;
let width = 1;

let interval;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

window.addEventListener('resize', checkWidth);

function checkWidth() {
  slider.style.left = 0 + 'px';
}

function nextSlide() {
  offset++;

  if (offset == 3) {
    offset = 0;
  }

  step = 0;

  switchSlide();
  activeButton(offset);
  progressBar();
}

function prevSlide() {
  // offset--;

  if (offset == 0) {
    offset = 2;
  } else {
    offset--;
  }

  step = 0;
  switchSlide();
  activeButton(offset);
  progressBar();
}

function switchSlide() {
  slider.style.left = ((-slide.offsetWidth - 25) * offset) + 'px';
}

function activeButton(index) {
  switchActiveStatusButtons.forEach(Element => Element.classList.remove("pagination-btn-span-active"));
  switchActiveStatusButtons[index].classList.add("pagination-btn-span-active");
  // progressBar(switchActiveStatusButtons[index]);
}

function progressBar() {
  if (step == 0) {
    step = 1;
    var elem = document.querySelector(".pagination-btn-span-active");
    width = 1;
    interval = setInterval(frame, 65);
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
        step = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function pause() {
  clearInterval(interval);
}

slider.addEventListener('mouseover', (event) => {
  if (event.target.closest('.slide')) {
    pause();
  }
})

setInterval(function() {
  nextSlide();
  activeButton(offset);
  progressBar();
}, 7000)

window.onload = () => progressBar();

