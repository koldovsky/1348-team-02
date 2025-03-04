const hammerScript = document.createElement('script');
hammerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js';
document.head.appendChild(hammerScript);

const carouselWrapper = document.querySelector(".carousel-wrapper");
const slides = document.querySelectorAll(".product-card");
const nextBtn = document.querySelector(".carousel-control.next");
const prevBtn = document.querySelector(".carousel-control.prev");

let currentIndex = 0;
let slidesToShow = getVisibleSlides();
const totalSlides = slides.length;

carouselWrapper.addEventListener('click', (e) => {
  const btn = e.target.closest('.add-to-cart');
  if (!btn) return;
  
  const productCard = btn.closest('.product-card');
  const productId = parseInt(productCard.dataset.id);
  
  if (window.addToCart) {
    window.addToCart(productId);
  }
});

function getVisibleSlides() {
  if (window.innerWidth >= 992) return 4;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function renderCarousel() {
  carouselWrapper.innerHTML = "";
  slidesToShow = getVisibleSlides();

  for (let i = 0; i < slidesToShow; i++) {
    let slideIndex = (currentIndex + i) % totalSlides;
    if (slideIndex < 0) slideIndex = totalSlides + slideIndex;
    
    const clone = slides[slideIndex].cloneNode(true);
    carouselWrapper.appendChild(clone);
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  renderCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  renderCarousel();
}

let isDragging = false;
let startX, scrollLeft;

carouselWrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - carouselWrapper.offsetLeft;
  scrollLeft = carouselWrapper.scrollLeft;
});

carouselWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
});

carouselWrapper.addEventListener('mouseup', () => {
  isDragging = false;
});

carouselWrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carouselWrapper.offsetLeft;
  const walk = (x - startX) * 2;
  carouselWrapper.scrollLeft = scrollLeft - walk;
});

carouselWrapper.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - carouselWrapper.offsetLeft;
  scrollLeft = carouselWrapper.scrollLeft;
});

carouselWrapper.addEventListener('touchend', () => {
  isDragging = false;
});

carouselWrapper.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].pageX - carouselWrapper.offsetLeft;
  const walk = (x - startX) * 2;
  carouselWrapper.scrollLeft = scrollLeft - walk;
});

hammerScript.onload = () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const hammer = new Hammer(carouselContainer);

  hammer.on('swipeleft', () => nextSlide());
  hammer.on('swiperight', () => prevSlide());
};

renderCarousel();
window.addEventListener("resize", renderCarousel);

if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);