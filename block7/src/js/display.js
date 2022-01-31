import {screenWidth} from "./variable";

const listBrand = document.querySelectorAll('.repair__item.brand');
const listEquipment = document.querySelectorAll('.repair__item.equipment')


const toDisplay = () => {

    if (screenWidth >= 768 && screenWidth <= 1119) {

      listBrand.forEach((el, index) => {
            if (index >= 6) {
              // console.log(index, 'listBrand');
                el.classList.add('repair__item__hide')
            }
        })

      listEquipment.forEach((el, index) => {
        if (index >= 3) {
          // console.log(index, 'listEquipment');
          el.classList.add('repair__item__hide')
        }
      })
    } else if (screenWidth >= 1120) {
      listBrand.forEach((el, index) => {
            if (index >= 8) {
                el.classList.add('repair__item__hide')
            }
        })
      listEquipment.forEach((el, index) => {
        if (index >= 4) {
          el.classList.add('repair__item__hide')
        }
      })
    }

}

toDisplay();
