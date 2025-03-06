const brands = document.querySelectorAll(".promo__brand");
const nextButton = document.querySelector(".promo__arrow--right");
const prevButton = document.querySelector(".promo__arrow--left");

let currentSlideIdx = 0;

function getVisibleSlides() {
  if (window.matchMedia("(min-width: 1024px)").matches) return 6;
  if (window.matchMedia("(min-width: 768px)").matches) return 3;
  return 1;
}

function renderCarousel() {
  const carouselContainer = document.querySelector(".promo__carousel");
  carouselContainer.innerHTML = "";

  const visibleSlides = getVisibleSlides();

  for (let i = 0; i < visibleSlides; i++) {
    const slideIdx = (currentSlideIdx + i) % brands.length;
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
