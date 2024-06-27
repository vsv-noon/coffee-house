const radioButtons = document.querySelectorAll('.menu-btn input[type="radio"]');
const productMenuSection = document.querySelectorAll('.product-menu-section');
const loadMoreButton = document.querySelector('.load-more-button');

radioButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    if (window.innerWidth <= 768) {
      if (path === 'tea') {
        loadMoreButton.style.display = 'none';
      } else {
        loadMoreButton.style.display = 'block';
      }

      document.getElementById('coffee-5-img').style.display = 'none';
      document.getElementById('coffee-6-img').style.display = 'none';
      document.getElementById('coffee-7-img').style.display = 'none';
      document.getElementById('coffee-8-img').style.display = 'none';
      document.getElementById('dessert-5-img').style.display = 'none';
      document.getElementById('dessert-6-img').style.display = 'none';
      document.getElementById('dessert-7-img').style.display = 'none';
      document.getElementById('dessert-8-img').style.display = 'none';
    }

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

loadMoreButton.addEventListener('click', () => {
  if (document.getElementById('coffee-id')) {
    loadMoreButton.style.display = 'none';
    document.getElementById('coffee-5-img').style.display = 'flex';
    document.getElementById('coffee-6-img').style.display = 'flex';
    document.getElementById('coffee-7-img').style.display = 'flex';
    document.getElementById('coffee-8-img').style.display = 'flex';
  }

  if (document.getElementById('dessert-id')) {
    loadMoreButton.style.display = 'none';
    document.getElementById('dessert-5-img').style.display = 'flex';
    document.getElementById('dessert-6-img').style.display = 'flex';
    document.getElementById('dessert-7-img').style.display = 'flex';
    document.getElementById('dessert-8-img').style.display = 'flex';
  }

})