const radioButtons = document.querySelectorAll('.menu-btn input[type="radio"]');
const productMenuSection = document.querySelectorAll('.product-menu-section');

radioButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    productMenuSection.forEach((item) => {
      item.classList.add('products-hide-animation');
    });
    setTimeout(() => {
      productMenuSection.forEach((el) => el.classList.add('hidden'));
      document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => el.classList.remove('products-hide-animation'));
        document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => el.classList.remove('hidden'));
        document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => el.classList.add('products-animation'));
    }, 1000);
  })
})