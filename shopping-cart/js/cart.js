const cartIcon = document.getElementById("cartIcon");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const addToCartButtons = document.querySelectorAll(".addToCartBtn");

let cart = []; 

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
            cart.push({ id, name, price,image, quantity: 1 });
        }

        updateCart();
    });
});
function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    if(cart.length===0){
        document.getElementById("emptyMessage").style.display="block"
        document.getElementById("cartIcon").style.display = "none";
        document.getElementById("emptyMessage").style.display = "block"; 
        document.getElementById("cartItems").style.display = "none"; 
        document.getElementById("cartTotal").style.display = "none"; 
        document.getElementById("cartCount").style.display = "none";
    }
    else{
        document.getElementById("cartIcon").style.display = "block";
        document.getElementById("emptyMessage").style.display = "none"; 
        document.getElementById("cartItems").style.display = "block"; 
        document.getElementById("cartTotal").style.display = "block"; 
        document.getElementById("cartCount").style.display = "block"; 
    }
    
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ""; 
    let total = 0;
    let itemCount = 0;

    for (let item of cart) {
        total += item.price * item.quantity; 
        itemCount += item.quantity; 

        cartItemsContainer.innerHTML += `
          <div>
                <img src="./images/${item.image}" alt="${item.name}" style="width: 46px; height: 46px; margin-right: 10px;"> 
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
document.getElementById("cartTotal").innerText = "$" + total.toFixed(2);
document.getElementById("cartCount").innerText = itemCount;

if (cart.length === 0) {
    document.getElementById("cartIcon").style.display = "none";

} else {
    document.getElementById("cartIcon").style.display = "block";
}

}


function changeQuantity(id, amount) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    const newQuantity = parseInt(amount);

    if (newQuantity >0) {
        item.quantity = newQuantity;
    }
    else {
        item.quantity = 1; 
    }
    updateCart();
}

 
cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
});

closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});
