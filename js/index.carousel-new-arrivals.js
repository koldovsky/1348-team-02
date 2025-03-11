const slides = document.querySelectorAll(".carousel-new-arrivals__item");
const prevButton = document.querySelector(".carousel-new-arrivals__arrow--left");
const nextButton = document.querySelector(".carousel-new-arrivals__arrow--right");
const carouselContainer = document.querySelector(".carousel-new-arrivals__items");

let currentSlideIdx = 0;
let visibleSlides = getVisibleSlides();

function getVisibleSlides() {
    if (window.matchMedia("(min-width: 992px)").matches) return 4;
    if (window.matchMedia("(min-width: 768px)").matches) return 2;
    return 1;
}

function renderCarousel() {
    carouselContainer.innerHTML = "";

    visibleSlides = getVisibleSlides();

    for (let i = 0; i < visibleSlides; i++) {
        let slideIdx = (currentSlideIdx + i) % slides.length;
        if (slideIdx < 0) {
            slideIdx = slides.length + slideIdx;
        }
        carouselContainer.appendChild(slides[slideIdx].cloneNode(true));
    }
}

function nextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    renderCarousel();
}

function prevSlide() {
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    renderCarousel();
}

renderCarousel();

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
window.addEventListener("resize", renderCarousel);


