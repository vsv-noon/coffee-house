const hamburgerMenu = document.querySelector(".hamburger-button");
const navigation = document.querySelector(".header-panel");

//Hamburger Menu Toggle
hamburgerMenu.onclick = function () {
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
var elem = document.querySelector(".pagination-btn-span-active");

let offset = 0;
let width = 0;

let interval;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

window.addEventListener('resize', checkWidth);

function checkWidth() {
  slider.style.left = 0 + 'px';
  if (window.innerWidth > 768) {
    document.body.classList.remove("lock");
    navigation.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
}

function nextSlide() {
  width = 0;
  offset++;

  if (offset == 3) {
    offset = 0;
  }

  clearInterval(interval);
  switchSlide();
  activeButton(offset);
  progressBar();
}

function prevSlide() {
  width = 0;
  if (offset == 0) {
    offset = 2;
  } else {
    offset--;
  }

  clearInterval(interval);
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
}

function progressBar() {
  var elem = document.querySelector(".pagination-btn-span-active");

  interval = setInterval(frame, 60);
  function frame() {
    if (width >= 100) {
      clearInterval(interval);
      width = 0;
      nextSlide();
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

slider.addEventListener('mouseover', (event) => {
  clearInterval(interval);
});

slider.addEventListener('mouseout', (event) => {
  clearInterval(interval);
  progressBar();
});

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (event) => {
  clearInterval(interval);
  touchStartX = event.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (event) => {
  clearInterval(interval);
  touchEndX = event.changedTouches[0].screenX;
  if (Math.abs(touchEndX - touchStartX) > 2) {
    if (touchEndX > touchStartX) {
      prevSlide()
    };
    if (touchEndX < touchStartX) {
      nextSlide()
    };
  }
  progressBar();
});

progressBar();

