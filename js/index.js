function init() {
  import("./products.js");
  import("./index.carousel-promo.js");
  import("./promotion.js");
  import("./header.js");
  import("./index.carousel-products.js");
  import("./index.our-shop.js");
  import("./index.carousel-new-arrivals.js")
  import("./index.carousel-trending-products.js")
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
