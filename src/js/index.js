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

//Swiper

const windowWidth = window.innerWidth;

let position = 0;

let slidesToShow =  (windowWidth <= 760) ? 1 :
                    (windowWidth >= 768 && windowWidth <= 1025) ? 2 :
                    3;
const slidesToScroll = 1;
const slidesToLine = 3;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const movePositionLine = slidesToLine * itemWidth;

const btnLine1 = document.querySelector('.line1');
const btnLine2 = document.querySelector('.line2');
const btnLine3 = document.querySelector('.line3');





items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth - 35 * slidesToShow) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition()
    checkBtns()
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px )`;
}

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

btnLine1.addEventListener('click', () => {
    position = 0

    setPosition()
    checkBtns()
})

btnLine2.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    const itemsPrev = Math.abs(position) / itemWidth;

    if(Math.abs(position) >= 7) {
        position += itemsPrev >= slidesToScroll ? movePositionLine : itemsPrev * itemWidth;
    }else {
        position -= itemsLeft >= slidesToScroll ? movePositionLine : itemsLeft * itemWidth;
    }

    setPosition();
    checkBtns();
})

btnLine3.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
    if(Math.abs(position) >= 4) {
        position -= itemsLeft >= slidesToScroll ? movePositionLine : itemsLeft * itemWidth;
    }else {
        position -= itemsLeft >= slidesToScroll ? movePositionLine*2 : itemsLeft * itemWidth;
    }

    setPosition();
    checkBtns();
})
