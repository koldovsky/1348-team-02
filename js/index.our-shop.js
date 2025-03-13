const ourStoreProductListSelector = document.querySelector(
  ".our-shop-item-list"
);

//default section
let style = document.createElement("style");
style.innerHTML = `
#dog {
  transition: color 0.5s ease;
  color: var(--body-color);
  border-bottom: 2px solid var(--color-secondary);
}`;
document.head.appendChild(style);
render(1);

const categories = document.querySelector(".our-shop__categories-list");

let previousStyle = null;

categories.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target.closest("li");
  if (!clickedElement) return;

  const category = clickedElement.id;
  if (!category) return;

  if (previousStyle) {
    previousStyle.remove();
  }
  
  style.innerHTML = `
  #${category} {
    transition: color 0.5s ease;
    color: var(--body-color);
    border-bottom: 2px solid var(--color-secondary);
  }`;
  document.head.appendChild(style);
  previousStyle = style;

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

  for (let i = 0; i < 4; i++) {
    if (!PRODUCTS_LIST[index + i]) break;

    htmlPage += `
            <article class="our-shop__item">
                <img
                    class="our-shop__item-pic"
                    src="${PRODUCTS_LIST[index + i - 1].image}"
                    alt="${PRODUCTS_LIST[index + i - 1].name}"
                />
                <a href="#"><h3 class="our-shop__item-name">${
                  PRODUCTS_LIST[index + i - 1].name
                }</h3></a>
                <p class="our-shop__item-price">$${PRODUCTS_LIST[
                  index + i - 1
                ].price.toFixed(2)}</p>
                <a href="#" class="our-shop__button button" onclick="addToCart(${
                  PRODUCTS_LIST[index + i - 1].id
                })">
                    Add to Cart
                </a>
            </article>`;
  }
  htmlPage += `</div>`;

  document.addEventListener("click", function (event) {
    if (event.target.closest(".our-shop__button")) {
      event.preventDefault();
    }
  });

  ourStoreProductListSelector.innerHTML = htmlPage;
}
