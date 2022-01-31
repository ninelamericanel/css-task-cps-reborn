const btnOpen = document.querySelectorAll('.open-btn');
const btnClose = document.querySelectorAll('.btn-close');
const content = document.querySelector('.content-wrapper');
const popup = document.querySelectorAll('.popup');

const btnOpenDesk = document.querySelectorAll('.open-btn.header-desktop__btn');
const btnCloseDesk = document.querySelectorAll('.btn-close.header-desktop__btn');
const popupDesk = document.querySelectorAll('.popup.left-popup');

btnOpenDesk.forEach((btn, i) => {

  btn.addEventListener('click', () => {
    console.log(btn.parentElement);
    popupDesk[i].classList.add('popup__open');
    document.body.style.overflow = "hidden";
    content.classList.add('content-opacity');
  });

})


btnCloseDesk.forEach((btn,i) => {
  btn.addEventListener('click', () => {
    popupDesk[i].classList.remove('popup__open');
    document.body.style.overflow = "";
    content.classList.remove('content-opacity');
  })
})

console.log(btnOpenDesk)

btnOpen.forEach((btn, i) => {

  btn.addEventListener('click', () => {
    console.log(btn.parentElement);
    popup[i].classList.add('popup__open');
    document.body.style.overflow = "hidden";
    content.classList.add('content-opacity');
  });

})


btnClose.forEach((btn,i) => {
  btn.addEventListener('click', () => {
    popup[i].classList.remove('popup__open');
    document.body.style.overflow = "";
    content.classList.remove('content-opacity');
  })
})
