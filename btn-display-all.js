const btnDisplayAll = document.querySelector('.services__display-all');
const btnHide = document.querySelector('.services__hide');
const listItem = document.querySelectorAll('.services__item');
const  screenWidth = screen.width;

const toDisplay = () => {
    const screenWidth1120 = screenWidth >= 1120 ?  listItem.forEach((el, index) => {
        if (index >= 8) {
            el.classList.add('services__item__hide')
        }
    }) : null;
    const screenWidth768 = screenWidth >= 768 || screenWidth <= 1119 ? listItem.forEach((el, index) => {
        if (index >= 6) {
            el.classList.add('services__item__hide')
        } }) : null;

console.log(screenWidth1120 || screenWidth768);
        return screenWidth1120 || screenWidth768;
}

toDisplay();

const listHideServices = document.querySelectorAll('.services__item__hide');

const displayBlock = () => {
    btnHide.style.cssText = 'display: block';
    btnDisplayAll.style.cssText = 'display: none';

    listHideServices.forEach(el => {
        el.classList.remove('services__item__hide')
    })
}

const hideBlock = () => {
    btnHide.style.cssText = 'display: none';
    btnDisplayAll.style.cssText = 'display: block';
    if (screenWidth >= 768) {
        listHideServices.forEach((el) => {
                el.classList.add('services__item__hide')

        })
    } else if (screenWidth >= 1120) {
        listHideServices.forEach((el) => {

                el.classList.add('services__item__hide')

        })
    }
}
