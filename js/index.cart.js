const cartIcon = document.querySelector(".cart__icon");
const cartCount = document.querySelector(".cart__count");
const cartModal = document.querySelector(".modal");
const closeCart = document.querySelector(".modal__close");
const cartItemsContainer = document.querySelector(".modal__items");
const cartTotal = document.querySelector("#cartTotal");
const addToCartButtons = document.querySelectorAll(".product__btn");
const promoCodeInputContainer = document.querySelector('.promo-code-input-container');

let cart = JSON.parse(localStorage.getItem("cart")) || [];

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = button.closest('.product');
        const id = product.getAttribute("data-id");
        const name = product.getAttribute("data-name");
        const price = parseFloat(product.getAttribute("data-price"));
        const image = product.getAttribute("data-image");
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({id, name, price, image, quantity: 1});
        }

        saveCart();
        updateCart();
    });
});

function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let itemCount = 0;
    let cartHTML = '';

    for (let item of cart) {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        cartHTML += createCartItemHTML(item);  
    }

    cartItemsContainer.innerHTML = cartHTML;  

    cartTotal.innerText = "$" + total.toFixed(2);
    cartCount.innerText = itemCount;

    toggleCartIconAndMessage();
}

function toggleCartIconAndMessage() {
    const cartIconDisplay = cart.length === 0 ? "none" : "block";
    const emptyMessageDisplay = cart.length === 0 ? "block" : "none";

    document.querySelector(".cart__icon").style.display = cartIconDisplay;
    document.querySelector(".modal__empty-message").style.display = emptyMessageDisplay;
}

function createCartItemHTML(item) {
    return `
  <div class="cart-item" data-id="${item.id}">
  <div class="cart-item-inner">
    <div class="cart-item-image">
     <img src="./assets/images/${item.image}" alt="${item.name}" />
    </div>
    <div class="cart-item-info">
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-quantity">x${item.quantity}</span> - 
      <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
   <div class="cart-item-actions">
  <div class="remove-btn" onclick="removeItem('${item.id}')">
    <svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z" fill="#9199AB"></path>
    </svg>
  </div>
  
  <div class="input-quantity">
    <input
      type="number"
      value="${item.quantity}"
      min="1"
      class="quantity-input"
      onchange="changeQuantity('${item.id}', this.value)"
    >
    
    <div class="input-quantity__arrows">
      <div class="arrow-up" data-sub-item="quantity-up">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.35067 0.155633C5.33527 0.138307 5.31853 0.122147 5.30057 0.107295C5.1069 -0.0528817 4.81533 -0.0312402 4.64933 0.155633L0.111189 5.26432C0.0394387 5.34509 -4.76276e-07 5.44797 -4.85577e-07 5.55435C-5.07094e-07 5.80047 0.206781 6 0.461859 6L9.53813 6C9.64838 6 9.755 5.96194 9.83871 5.89271C10.0324 5.73253 10.0548 5.4512 9.8888 5.26432L5.35067 0.155633Z" fill="#9199AB"></path>
        </svg>
      </div>
      <div class="arrow--down" data-sub-item="quantity-down">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.35067 0.155633C5.33527 0.138307 5.31853 0.122147 5.30057 0.107295C5.1069 -0.0528817 4.81533 -0.0312402 4.64933 0.155633L0.111189 5.26432C0.0394387 5.34509 -4.76276e-07 5.44797 -4.85577e-07 5.55435C-5.07094e-07 5.80047 0.206781 6 0.461859 6L9.53813 6C9.64838 6 9.755 5.96194 9.83871 5.89271C10.0324 5.73253 10.0548 5.4512 9.8888 5.26432L5.35067 0.155633Z" fill="#9199AB"></path>
        </svg>
      </div>
    </div>
  </div>
</div>

    `;
}

function changeQuantity(id, amount) {
    const item = cart.find(i => i.id === id);
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
  const promoCodeInputContainer = document.querySelector('.promo-code-input-container');
  promoCodeInputContainer.classList.toggle('close');
}

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

