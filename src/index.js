const btnBurgerMenu = document.querySelector('.js-menu-button__open');
const headerMenu = document.querySelector('.js-header__menu');
const btnCloseMenu = document.querySelector('.js-menu-button__close');
const navLinkMenu = document.querySelectorAll('.js-nav__link');
const backDrop = document.querySelector('.backdrop');
const heroTextBtn = document.querySelector('.hero__text-button');
const heroIconUp = document.querySelector('.hero__icon-up');
const heroIconDown = document.querySelector('.hero__icon-down');
const heroText = document.querySelector('.js-hero__text-inner')
const buyButton = document.querySelector('.js-buy-button')


btnBurgerMenu.addEventListener('click', isOpenMenu);


btnCloseMenu.addEventListener('click', isOpenMenu);

buyButton.addEventListener('click', () => {
    headerMenu.classList.remove('is-open');
    backDrop.classList.add('is-hidden');
});

navLinkMenu.forEach(el =>
    el.addEventListener('click', (e) => {
        headerMenu.classList.toggle('is-open');
        backDrop.classList.add('is-hidden');

     
    }));


function isOpenMenu() {
    headerMenu.classList.toggle('is-open')
    backDrop.classList.toggle('is-hidden');
};

heroTextBtn.addEventListener('click', () => {
    heroText.classList.toggle('text-hidden');
    heroIconUp.classList.toggle('icon-hidden');
    heroIconDown.classList.toggle('icon-hidden');
}

);

