function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header-navigation-style');
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
}