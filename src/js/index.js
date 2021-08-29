const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body')
const headerMenu = document.querySelector(".header__menu");

headerBurger.addEventListener("click", toggleActive);


function toggleActive() {
    headerMenu.classList.toggle("active");
    headerBurger.classList.toggle("active");
    body.classList.toggle('lock');
}

headerMenu.addEventListener("click", deleteActive) 

function deleteActive() {
    headerMenu.classList.toggle("active");
    headerBurger.classList.toggle("active");
    body.classList.toggle('lock');
}