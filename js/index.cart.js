const cartIcon = document.querySelector(".cart__icon");
const cartCount = document.querySelector(".cart__count");
const cartModal = document.querySelector(".modal");
const closeCart = document.querySelector(".modal__close");
const cartItemsContainer = document.querySelector(".modal__items");
const cartTotal = document.querySelector("#cartTotal");
const addToCartButtons = document.querySelectorAll(".product__btn");
const promoCodeInputContainer = document.querySelector(
  ".promo-code-input-container"
);
const promoCodeApplyBtn = document.querySelector("#promo-code-apply-button");
const promocodeInput = document.querySelector("#promo-code-input");
let priceCoeficient = 1;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

//to remove (only for test)
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    const id = product.getAttribute("data-id");
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));
    const image = product.getAttribute("data-image");
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, image, quantity: 1 });
    }

    saveCart();
    updateCart();
  });
});

function addToCart(id){
  const product = PRODUCTS_LIST.find((element)=>element.id === id)
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
  }
  console.log(cart)
  saveCart();
  updateCart();
}

function removeItem(itemId) {
  cart = cart.filter((item) => item.id.toString() !== itemId.toString());
  console.log(cart)

  saveCart();
  updateCart();
}

function updateTotal() {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.quantity;
  }

  cartTotal.innerText = "Total: " + "$" + (total * priceCoeficient).toFixed(2);
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let itemCount = 0;
  let cartHTML = "";

  for (let item of cart) {
    itemCount += item.quantity;

    cartHTML += createCartItemHTML(item);
  }

  cartItemsContainer.innerHTML = cartHTML;
  cartCount.innerText = itemCount;
  updateTotal();

  toggleCartIconAndMessage();
}

function toggleCartIconAndMessage() {
  const cartIconDisplay = cart.length === 0 ? "none" : "block";
  const emptyMessageDisplay = cart.length === 0 ? "block" : "none";

  document.querySelector(".cart__icon").style.display = cartIconDisplay;
  document.querySelector(".modal__empty-message").style.display =
    emptyMessageDisplay;
}

function createCartItemHTML(item) {
  return ` 
  <div class="cart-item" data-item="product-cart-item" data-item-id="${item.id}">
   <div class="cart-item-inner">
      <div class="cart-item-image" data-sub-item="preview">
         <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
         <div data-sub-item="info" class="cart-item-wrapper-name">
            <div data-sub-item="name" class="cart-item-name ui-text item-name">
               <a href="#" target="_blank">${item.name}</a>
            </div>
            <div data-sub-item="options" class="cart-item-options name-options ui-text">
            </div>
         </div>
         <div class="cart-item-right">
            <div class="unavailable" data-sub-item="unavailable" style="display:none">
               <svg width="24" height="24" fill="#D9534C" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 17.315A2.688 2.688 0 006.685 20h10.629a2.684 2.684 0 002.332-4.018L14.05 6.188a2.363 2.363 0 00-4.1 0l-5.594 9.794A2.69 2.69 0 004 17.315zm1.655-.588l5.594-9.794a.863.863 0 011.5 0l5.595 9.794a1.185 1.185 0 01-1.03 1.773H6.684a1.184 1.184 0 01-1.03-1.773z" fill="inherit"></path>
                  <path d="M12.749 10.248h-1.5v4h1.5v-4zM11.999 16.999a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="inherit"></path>
               </svg>
            </div>
            <div data-sub-item="quantity" data-test="input-quantity" data-no-input-classnames="no-input-quantity,ui-text">
               <div class="cart-item-input-quantity">
                  <input type="number" 
                  class="cart-item-input" 
                  value=${item.quantity}  
                  onchange="changeQuantity('${item.id}', this.value)"
                  >
                  <div class="input-quantity__arrows">
                     <div class="arrow_up" data-sub-item="quantity-up"  onclick="changeQuantity('${
                       item.id
                     }', ${item.quantity + 1})">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.35067 0.155633C5.33527 0.138307 5.31853 0.122147 5.30057 0.107295C5.1069 -0.0528817 4.81533 -0.0312402 4.64933 0.155633L0.111189 5.26432C0.0394387 5.34509 -4.76276e-07 5.44797 -4.85577e-07 5.55435C-5.07094e-07 5.80047 0.206781 6 0.461859 6L9.53813 6C9.64838 6 9.755 5.96194 9.83871 5.89271C10.0324 5.73253 10.0548 5.4512 9.8888 5.26432L5.35067 0.155633Z" fill="#9199AB"></path>
                        </svg>
                     </div>
                     <div class="arrow--down" data-sub-item="quantity-down" onclick="changeQuantity('${
                       item.id
                     }', ${item.quantity - 1})">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.35067 0.155633C5.33527 0.138307 5.31853 0.122147 5.30057 0.107295C5.1069 -0.0528817 4.81533 -0.0312402 4.64933 0.155633L0.111189 5.26432C0.0394387 5.34509 -4.76276e-07 5.44797 -4.85577e-07 5.55435C-5.07094e-07 5.80047 0.206781 6 0.461859 6L9.53813 6C9.64838 6 9.755 5.96194 9.83871 5.89271C10.0324 5.73253 10.0548 5.4512 9.8888 5.26432L5.35067 0.155633Z" fill="#9199AB">
                           </path>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
            <div data-sub-item="amount" class="cart-item-amount ui-text" data-amount="800">$${(
              item.price * item.quantity
            ).toFixed(2)}
            </div>
         </div>
      </div>
      <div data-sub-item="remove" class="remove-item" onclick="removeItem('${
        item.id
      }')">
         <svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z" fill="#9199AB">
            </path>
         </svg>
      </div>
   </div>
</div>
  `;
}

function changeQuantity(id, amount) {
  const item = cart.find((element) => element.id.toString() === id.toString());
  if (!item) return;

  const newQuantity = parseInt(amount);
  if (newQuantity > 0) {
    item.quantity = newQuantity;
  } else {
    item.quantity = 1;
  }

  saveCart();
  updateCart();
}

function togglePromoCodeInput() {
  promoCodeInputContainer.classList.toggle("close");
}

promoCodeApplyBtn.addEventListener("click", () => {
  switch (promocodeInput.value) {
    case "MARGO_15":
      priceCoeficient = 0.85;
      break;

    case "MARGO_20":
      priceCoeficient = 0.8;
      break;

    case "MARGO_25":
      priceCoeficient = 0.75;
      break;

    case "MARGO_50":
      priceCoeficient = 0.5;
      break;

    default:
      priceCoeficient = 1;
      break;
  }
  updateTotal();
});

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

updateCart();

cartIcon.addEventListener("click", () => {
  cartModal.style.display = "block";
});

closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});
