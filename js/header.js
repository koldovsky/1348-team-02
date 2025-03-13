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

function closeMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navigation = document.querySelector(".header-navigation-style");
  const timeContact = document.querySelector(".time-contact");
  const mediaIcon = document.querySelector(".media-icon");

  burgerMenu.classList.remove("active");
  navigation.classList.remove("active");
  timeContact.classList.remove("active");
  mediaIcon.classList.remove("active");

  console.log("Menu closed");
}
document.querySelector(".burger-menu").addEventListener("click", toggleMenu);

document.querySelectorAll(".header-navigation-link").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    closeMenu();
  });
});