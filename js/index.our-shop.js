const ourStoreProductListSelector = document.querySelector(
  ".our-shop-item-list"
);
render(1);

const categories = document.querySelector(".our-shop__categories-list");

categories.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target.closest("li");
  if (!clickedElement) return;

  const category = clickedElement.id;
  if (!category) return;

  let index;
  switch (category) {
    case "dog": index = 1; break;
    case "cat": index = 5; break;
    case "parrot": index = 9; break;
    case "rabbit": index = 13; break;
    case "hamster": index = 17; break;
    case "fish": index = 21; break;
    default: return;
  }
  render(index);
});

function render(index) {
  let htmlPage = `<div class="our-shop__item-container">`;

  for (let i = -1; i < 3; i++) {
    if (!PRODUCTS_LIST[index + i]) break;

    htmlPage += `
            <article class="our-shop__item">
                <img
                    class="our-shop__item-pic"
                    src="${PRODUCTS_LIST[index + i].image}"
                    alt="${PRODUCTS_LIST[index + i].name}"
                />
                <a href="#"><h3 class="our-shop__item-name">${
                  PRODUCTS_LIST[index + i].name
                }</h3></a>
                <p class="our-shop__item-price">$${
                  PRODUCTS_LIST[index + i].price
                }</p>
                <a href="" class="our-shop__button button" onclick="addToCart(${
                  PRODUCTS_LIST[index + i].id
                })">
                    Add to Cart
                </a>
            </article>`;
  }

  htmlPage += `</div>`;
  ourStoreProductListSelector.innerHTML = htmlPage;
}
