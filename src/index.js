const btnBurgerMenu = document.querySelector('.menu-button__open');
const headerMenu = document.querySelector('.header__menu');
const btnCloseMenu = document.querySelector('.menu-button__close');

btnBurgerMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});

btnCloseMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});