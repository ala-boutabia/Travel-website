const header = document.querySelector('.header')
const hamburger = document.querySelector('.header__btnMenu');
const navLinks = document.querySelector('.header__links');

hamburger.addEventListener('click', () => {
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    header.classList.toggle('active');
    
})