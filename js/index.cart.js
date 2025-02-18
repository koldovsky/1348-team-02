const cartIcon = document.querySelector(".cart__icon"); 
const cartCount = document.querySelector(".cart__count"); 
const cartModal = document.querySelector(".modal"); 
const closeCart = document.querySelector(".modal__close");
const cartItemsContainer = document.querySelector(".modal__items"); 
const cartTotal = document.querySelector(".modal__total-amount"); 
const addToCartButtons = document.querySelectorAll(".product__btn"); 


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

    for (let item of cart) {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        cartItemsContainer.innerHTML += `
          <div>
                <img src="./assets/images/${item.image}" alt="${item.name}" style="width: 46px; height: 46px; margin-right: 10px;"> 
                ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
                <button onclick="removeItem('${item.id}')">Remove</button> 

                <input
                    type="number"
                    value="${item.quantity}"
                    min="1"
                    onchange="changeQuantity('${item.id}', this.value)"
                />
            </div>
        `;
    }

    cartTotal.innerText = "$" + total.toFixed(2);
    cartCount.innerText = itemCount;

    if (cart.length === 0) {
        document.querySelector(".cart__icon").style.display = "none"; 
        document.querySelector(".modal__empty-message").style.display = "block"; 
    } else {
        document.querySelector(".cart__icon").style.display = "block"; 
        document.querySelector(".modal__empty-message").style.display = "none";
    }
}

function changeQuantity(id, amount) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    const newQuantity = parseInt(amount);
    item.quantity = newQuantity > 0 ? newQuantity : 1;

    saveCart(); 
    updateCart();
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

