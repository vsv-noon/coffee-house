const menuCardItem = document.querySelectorAll('.menu-card-item');
const modals = document.querySelectorAll('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');
const modalAdditivesButtons = document.querySelectorAll('.modal-additives-btn');
const modalPrice = document.querySelector('.p-price');
const modalSizeButtons = document.querySelectorAll('.modal-size-btn');
const modalButtonsInner = document.querySelectorAll('.modal-btn-inner');

let startPrice;

menuCardItem.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal-visible');
    });
    modalSizeButtons.forEach((element) => {
      if (element.classList.contains('modal-btn-S')) {
        element.classList.add('modal-btn-active');
      } else {
        element.classList.remove('modal-btn-active');
      }
    });

    let innerTarget = e.target.closest('.modal-btn-inner');
    console.log(innerTarget);
    document.querySelector(`[data-target="${path}"]`).classList.add('modal-visible');
    modalOverlay.classList.add('modal-overlay-visible');
    modalOverlay.style.background = 'rgba(0, 0, 0, 0.7)';
    document.body.style.overflow = 'hidden';

    let target = e.target.closest('.menu-card-item');
    const modalImage = document.querySelector('.modal-img');
    const modalTitle = document.querySelector('.h3-modal-coffee');
    const modalText = document.querySelector('.p-modal-coffee');

    modalImage.src = target.children[0].children[0].src;
    modalTitle.innerHTML = target.children[1].innerHTML;
    modalText.innerHTML = target.children[2].innerHTML;
    modalPrice.innerHTML = target.children[3].innerHTML;
    startPrice = target.children[3].innerHTML;

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

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay-visible');
    document.body.style.overflow = '';
    modals.forEach((el) => {
      el.classList.remove('modal-visible');
    });
    modalSizeButtons.forEach((element) => {
      element.classList.remove('modal-btn-active');
    });
    modalAdditivesButtons.forEach((element) => {
      element.classList.remove('modal-btn-active');
    });
  }
});

closeButton.addEventListener('click', () => {
  modalOverlay.classList.remove('modal-overlay-visible');
  document.body.style.overflow = '';
  modals.forEach((el) => {
    el.classList.remove('modal-visible');
  });

  modalAdditivesButtons.forEach((element) => {
    element.classList.remove('modal-btn-active');
  });
});

modalSizeButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    let firstPrice = startPrice.slice(1);
    let size = e.target.closest('.modal-btn').children[0].innerHTML;
    modalSizeButtons.forEach((element) => {
      element.classList.remove('modal-btn-active');
    });
    modalAdditivesButtons.forEach((element) => {
      element.classList.remove('modal-btn-active');
    });
    modalButtonsInner.forEach((el) => {
      el.classList.add("modal-btn-inner-active");
    })
    el.classList.add('modal-btn-active');
    if (size === 'S') {
      modalPrice.innerHTML = startPrice;
    } else if (size === 'M') {
      let price = Number(firstPrice) + 0.5;
      priceLength = price.toString().length;
      priceLength === 1 ? modalPrice.innerHTML = `$${price}.00` : modalPrice.innerHTML = `$${price}0`;
    } else if (size === 'L') {
      let price = Number(firstPrice) + 1;
      priceLength = price.toString().length;
      priceLength === 1 ? modalPrice.innerHTML = `$${price}.00` : modalPrice.innerHTML = `$${price}0`;
    }
  });
});

modalAdditivesButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    el.classList.toggle('modal-btn-active');
    if (el.classList.contains('modal-btn-active')) {
      let price = Number(modalPrice.innerHTML.slice(1)) + 0.5;
      priceLength = price.toString().length;
      priceLength === 1 ? modalPrice.innerHTML = `$${price}.00` : modalPrice.innerHTML = `$${price}0`;
    } else {
      let price = Number(modalPrice.innerHTML.slice(1)) - 0.5;
      priceLength = price.toString().length;
      priceLength === 1 ? modalPrice.innerHTML = `$${price}.00` : modalPrice.innerHTML = `$${price}0`;
    }
  });
})