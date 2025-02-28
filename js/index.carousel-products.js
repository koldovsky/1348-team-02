const brands = document.querySelectorAll(".carousel-products-item");
const nextButton = document.querySelector(".carousel-products-arrow-right");
const prevButton = document.querySelector(".carousel-products-arrow-left");
const carouselContainer = document.querySelector(".carousel-products-list");

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
        let slideIdx = (currentSlideIdx + i) % brands.length;
        if (slideIdx < 0) {
            slideIdx = brands.length + slideIdx;
        }
        carouselContainer.appendChild(brands[slideIdx].cloneNode(true));
    }
}

function nextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % brands.length;
    renderCarousel();
}

function prevSlide() {
    currentSlideIdx = (currentSlideIdx - 1 + brands.length) % brands.length;
    renderCarousel();
}

renderCarousel();

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

window.addEventListener("resize", renderCarousel);