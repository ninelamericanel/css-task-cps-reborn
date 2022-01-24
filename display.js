const listItem = document.querySelectorAll('.services__item');
const screenWidth = screen.width;

const toDisplay = () => {

    if (screenWidth >= 768 && screenWidth <= 1119) {
        listItem.forEach((el, index) => {
            if (index >= 6) {
                el.classList.add('services__item__hide')
            }
        })
    } else if (screenWidth >= 1120) {
        listItem.forEach((el, index) => {
            if (index >= 8) {
                el.classList.add('services__item__hide')
            }
        })
    }

}

toDisplay();