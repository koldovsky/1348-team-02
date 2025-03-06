 const slides = document.querySelectorAll(".carousel-new-arrivals__item");
 const prevButton = document.querySelector(".carousel-new-arrivals__arrow--left");
const nextButton = document.querySelector(".carousel-new-arrivals__arrow--right")  
 const carouselCont=document.querySelector(".carousel-new-arrivals__items")  
 
 let currentSlideIdx=0;
 let slidesToShow = getVisibleSlides();
 const totalSlides = slides.length;

 function getVisibleSlides() {
  if (window.innerWidth >= 992) return 4;
  if (window.innerWidth >= 768) return 2;
  return 1;
}
   
 function renderCarousel() {
  
   carouselCont.innerHTML = "";
slidesToShow = getVisibleSlides();
let newContent = "";
for (let i = 0; i < slidesToShow; i++) {
    let slideIndex = (currentSlideIdx + i) % totalSlides;
    newContent += slides[slideIndex].outerHTML;
}
carouselCont.innerHTML = newContent;
 }

   function nextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    renderCarousel();
   }

   function prevSlide() {
    currentSlideIdx= (currentSlideIdx - 1 + slides.length) % slides.length;
    renderCarousel();
   }

   
  renderCarousel();

nextButton.addEventListener("click",nextSlide);   
prevButton.addEventListener("click", prevSlide);
window.addEventListener("resize", renderCarousel);

