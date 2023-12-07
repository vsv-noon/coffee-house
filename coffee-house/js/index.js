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
