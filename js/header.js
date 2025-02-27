function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.header-navigation-style');
    const timeContact = document.querySelector('.time-contact');
    const mediaIcon = document.querySelector('.media-icon');
    const workTime = document.querySelector('.work-time');
    const contactEmail = document.querySelector('.contact-email');
    const contactPhone = document.querySelector('.contact-phone');
    const socialNetworks = document.querySelector('.social-networks');

    burgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
    timeContact.classList.toggle('active');
    mediaIcon.classList.toggle('active');
    workTime.classList.toggle('active');
    contactEmail.classList.toggle('active');
    contactPhone.classList.toggle('active');
    socialNetworks.classList.toggle('active');

    console.log('Menu toggled');
}
document.querySelector('.burger-menu').addEventListener('click', toggleMenu);