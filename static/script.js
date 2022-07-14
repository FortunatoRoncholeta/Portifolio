/* funçao do menu no modo mobile*/

let menuMobile = document.querySelector('.icon-mobile')
let body = document.querySelector('body')



menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle('menu-nav-active');
});