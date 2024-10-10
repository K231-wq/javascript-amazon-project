
const productGrid = document.querySelector('.js-products-grid');

let productsListHtml = ' ';

renderHtml();

function renderHtml(){
    
    products.forEach((product, index) => {
        productsListHtml += `
                <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${priceCents(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-to-cart-button" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
        `;
    });
    productGrid.innerHTML = productsListHtml;
}


document.querySelectorAll('.js-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        const selectorElement = document.querySelector(`.js-quantity-selector-${productId}`);
        let selectedValue = Number(selectorElement.value);
        console.log("selected value " + selectedValue);


        let matchingItem;

        cart.forEach((item) => {
            if(item.productId === productId){
                matchingItem = item;
            }
        })

        if(matchingItem){
            matchingItem.quantity += selectedValue;
        }else{
            cart.push({
                productId: productId,
                quantity: selectedValue
            });
        }
        
        console.log(cart);

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })
        
        console.log("total quantity " + cartQuantity);
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

        addToCard();
        setTimeout(() => {
            document.querySelector('.js-added-to-cart').style.opacity = 0;
        }, 3000);
    })
})

//small function
function priceCents(price){
    return (price/100).toFixed(2);
};

function addToCard(){
    const added = document.querySelector('.js-added-to-cart');
    added.style.opacity = 1;
}