function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.headrer-navigation-style');
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
}