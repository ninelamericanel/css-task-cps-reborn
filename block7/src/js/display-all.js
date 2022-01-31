import {screenWidth} from "./variable";

const displayBtn = document.querySelectorAll('.display');
const hideBtn = document.querySelectorAll('.hide');

const listBrandHide = document.querySelectorAll('.repair__item__hide.brand');
const listEquipmnetHide = document.querySelectorAll('.repair__item__hide.equipment');

displayBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
      btn.classList.add('hide');
      if (btn.nextElementSibling.classList.value.includes('repair__text-btn')) {
        btn.nextElementSibling.classList.remove('hide');
        if (btn.parentElement.classList.value.includes('repair-brand__block')) {
          display(listBrandHide);
        } else if (btn.parentElement.classList.value.includes('repair-equipment__block')) {
          display(listEquipmnetHide);
        }
      } else {
        throw Error('btn is not here')
      }
    }
  )
})

hideBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('hide');
    if (btn.previousElementSibling.classList.value.includes('repair__text-btn')) {
      btn.previousElementSibling.classList.remove('hide');
      if (btn.parentElement.classList.value.includes('repair-brand__block')) {
        if (screenWidth >= 768) {
          hide(listBrandHide);
        } else if (screenWidth >= 1120) {
          hide(listBrandHide);
        }
      } else if (btn.parentElement.classList.value.includes('repair-equipment__block')) {
        if (screenWidth >= 768) {
          hide(listEquipmnetHide);
        } else if (screenWidth >= 1120) {
          hide(listEquipmnetHide);
        }
      }
    } else {
      throw Error('btn is not here')
    }


  })
})

function display (arr) {
  return arr.forEach((el) => {

    el.classList.remove('repair__item__hide')

  })
}

function hide (arr) {
  return arr.forEach((el) => {

    el.classList.add('repair__item__hide')

  })
}
