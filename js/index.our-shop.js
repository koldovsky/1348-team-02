const ourStoreProductListSelector = document.querySelector('.our-shop-item-list')

let htmlPage = ''

PRODUCTS_LIST.forEach((element, index)=>{
    if( (index + 1)  %4 === 1){
        htmlPage += `<div class="our-shop__item-container">`
    }
    htmlPage += `
    <article 
        class="our-shop__item"
    >
      <img
        width="270"
        class="our-shop__item-pic"
        src="${element.image}"
        alt="${element.name}"
      />
      <a href="#"><h3 class="our-shop__item-name">${element.name}</h3></a>
      <p class="our-shop__item-price">$${element.price}</p>
      <a href="" class="our-shop__button button" onclick="addToCart(${ element.id })" >
      Add to Cart</a>
    </article>`

    if( (index+1) % 4 === 0){
        htmlPage += `</div>`
    }
})

ourStoreProductListSelector.innerHTML = htmlPage