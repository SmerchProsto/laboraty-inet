const navCheckBox = document.querySelector('#menu__toggle');
const mainNav = document.querySelector('.main-nav')
function navChangeColor() {
    mainNav.classList.toggle('main-nav-white');
}
navCheckBox.addEventListener('click' , navChangeColor);

if (window.innerWidth >= 768) {
    /*document.querySelector('.comments-slider').setAttribute('uk-slider' , '')*/
}
