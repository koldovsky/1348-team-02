    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".product-card");
    const nextBtn = document.querySelector(".carousel-control.next");
    const prevBtn = document.querySelector(".carousel-control.prev");

    let currentIndex = 0;
    let slidesToShow = getVisibleSlides();
    const totalSlides = slides.length;

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
            carouselWrapper.appendChild(slides[slideIndex].cloneNode(true));
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

    renderCarousel();

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
    window.addEventListener("resize", renderCarousel);