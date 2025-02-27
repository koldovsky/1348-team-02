function toggleMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navigation = document.querySelector(".header-navigation-style");
  const timeContact = document.querySelector(".time-contact");
  const mediaIcon = document.querySelector(".media-icon");

  burgerMenu.classList.toggle("active");
  navigation.classList.toggle("active");
  timeContact.classList.toggle("active");
  mediaIcon.classList.toggle("active");

  console.log("Menu toggled");
}

document.querySelector(".burger-menu").addEventListener("click", toggleMenu);
