const btnBurgerMenu = document.querySelector('.menu-button__open');
const headerMenu = document.querySelector('.header__menu');
const btnCloseMenu = document.querySelector('.menu-button__close');
const nav1CloseMenu = document.querySelector('.js1');
const nav2CloseMenu = document.querySelector('.js2');
const nav3CloseMenu = document.querySelector('.js3');
const nav4CloseMenu = document.querySelector('.js4');
const nav5CloseMenu = document.querySelector('.js5');
    
btnBurgerMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});

btnCloseMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});

nav1CloseMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});
nav2CloseMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});
nav3CloseMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});
nav4CloseMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});
nav5CloseMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('is-open')
});