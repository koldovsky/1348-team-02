function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header-navigation-style');
    const time = document.querySelector('.time-contact');
   /* const contact = document.querySelector('.contact-email-phone');*/
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    time.classList.toggle('active');
    /*contact.classList.toggle('active');*/
}
