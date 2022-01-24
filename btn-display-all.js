const btnDisplayAll = document.querySelector('.services__display-all');
const btnHide = document.querySelector('.services__hide');
const listHideServices = document.querySelectorAll('.services__item__hide');

btnDisplayAll.addEventListener('click', () => {
    btnHide.style.cssText = 'display: block';
    btnDisplayAll.style.cssText = 'display: none';

    listHideServices.forEach(el => {
        el.classList.remove('services__item__hide')
    })
})

btnHide.addEventListener('click', () => {
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
})

