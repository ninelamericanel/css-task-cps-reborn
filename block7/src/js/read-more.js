const btn = document.querySelector('.main-content__text-btn');
const description = document.querySelector('.main-content__description');

btn.addEventListener('click', () => {
  description.style.cssText = 'max-height: 100%; ';
  btn.style.cssText = 'display: none ';
})
