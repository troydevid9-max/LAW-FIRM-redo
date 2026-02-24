

const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.arrow.left');
const nextBtn = document.querySelector('.arrow.right');

let index = 0;
let autoSlide;
let gap = 30;

function getCardWidth() {
    return cards[0].offsetWidth + gap;
}

function getVisibleCards() {
    if (window.innerWidth < 500) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
}

function moveSlider() {
    slider.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

function nextSlide() {
    if (index >= cards.length - getVisibleCards()) {
        index = 0;
    } else {
        index++;
    }
    moveSlider();
}

function prevSlide() {
    if (index <= 0) {
        index = cards.length - getVisibleCards();
    } else {
        index--;
    }
    moveSlider();
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 1200);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

window.addEventListener('resize', moveSlider);

startAutoSlide();
