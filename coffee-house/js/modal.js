const menuCardItem = document.querySelectorAll('.menu-card-item');
const modals = document.querySelectorAll('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');



menuCardItem.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal-visible');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('modal-visible');
    modalOverlay.classList.add('modal-overlay-visible');
    modalOverlay.style.background = 'rgba(0, 0, 0, 0.7)';
    document.body.style.overflow = 'hidden';

    let target = e.target.closest('.menu-card-item');
    const modalImage = document.querySelector('.modal-img');
    const modalTitle = document.querySelector('.h3-modal-coffee');
    const modalText = document.querySelector('.p-modal-coffee');
    const modalPrice = document.querySelector('.p-price');

    modalImage.src = target.children[0].children[0].src;
    modalTitle.innerHTML = target.children[1].innerHTML;
    modalText.innerHTML = target.children[2].innerHTML;
    modalPrice.innerHTML = target.children[3].innerHTML;

    let dataItem = e.target.closest('.menu-card-item').dataset.title;

    if (dataItem === "coffee-item") {
      document.querySelector('.coffee-size-buttons').style.display = 'flex';
      document.querySelector('.dessert-size-buttons').style.display = 'none';
      document.querySelector('.coffee-additives-buttons').style.display = 'flex';
      document.querySelector('.tea-additives-buttons').style.display = 'none';
      document.querySelector('.dessert-additives-buttons').style.display = 'none';
    } else if (dataItem === "tea-item") {
      document.querySelector('.coffee-size-buttons').style.display = 'flex';
      document.querySelector('.dessert-size-buttons').style.display = 'none';
      document.querySelector('.coffee-additives-buttons').style.display = 'none';
      document.querySelector('.tea-additives-buttons').style.display = 'flex';
      document.querySelector('.dessert-additives-buttons').style.display = 'none';
    } else if (dataItem === "dessert-item") {
      document.querySelector('.dessert-size-buttons').style.display = 'flex';
      document.querySelector('.coffee-size-buttons').style.display = 'none';
      document.querySelector('.coffee-additives-buttons').style.display = 'none';
      document.querySelector('.tea-additives-buttons').style.display = 'none';
      document.querySelector('.dessert-additives-buttons').style.display = 'flex';
    }
  })
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay || e.target == hamburger) {
    modalOverlay.classList.remove('modal-overlay-visible');
    // modalOverlay.style.background = 'none';
    document.body.style.overflow = '';
    modals.forEach((el) => {
      el.classList.remove('modal-visible');
    });
  }
});

closeButton.addEventListener('click', () => {
  modalOverlay.classList.remove('modal-overlay-visible');
  // modalOverlay.style.background = 'none';
  document.body.style.overflow = '';
  modals.forEach((el) => {
    el.classList.remove('modal-visible');
  });
})