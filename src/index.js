const btnBurgerMenu = document.querySelector('.js-menu-button__open');
const headerMenu = document.querySelector('.js-header__menu');
const btnCloseMenu = document.querySelector('.js-menu-button__close');
const navLinkMenu = document.querySelectorAll('.js-nav__link');

btnBurgerMenu.addEventListener('click', isOpenMenu);

btnCloseMenu.addEventListener('click', isOpenMenu);

navLinkMenu.forEach(el =>
    el.addEventListener('click', isOpenMenu));


function isOpenMenu() {
    headerMenu.classList.toggle('is-open')
};