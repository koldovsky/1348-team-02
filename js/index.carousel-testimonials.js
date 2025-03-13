const items = document.querySelectorAll(".testimonials__carousel_slide");
const nextButton = document.querySelector(".testimonials-carousel-control.next");
const prevButton = document.querySelector(".testimonials-carousel-control.prev");
const carouselContainer = document.querySelector(".testimonials__carousel_list");

let currentSlideIdx = 0;
let visibleSlides = getVisibleSlides();

function getVisibleSlides() {
    if (window.matchMedia("(min-width: 992px)").matches) return 3;
    if (window.matchMedia("(min-width: 768px)").matches) return 2;
    return 1;
}

function renderCarousel() {
    carouselContainer.innerHTML = "";

    visibleSlides = getVisibleSlides();

    for (let i = 0; i < visibleSlides; i++) {
        let slideIdx = (currentSlideIdx + i) % items.length;
        if (slideIdx < 0) {
            slideIdx = items.length + slideIdx;
        }
        carouselContainer.appendChild(items[slideIdx].cloneNode(true));
    }
}

renderCarousel();

nextButton.addEventListener("click", () => {
    if (currentSlideIdx + 1 === items.length) return;
    currentSlideIdx = (currentSlideIdx + 1) % items.length;
    renderCarousel();

});
prevButton.addEventListener("click", () => {
    if (currentSlideIdx === 0) return;
    currentSlideIdx = (currentSlideIdx - 1 + items.length) % items.length;
    renderCarousel();
});

window.addEventListener("resize", renderCarousel);
