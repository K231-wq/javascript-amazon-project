import { cart } from "../../data/cart.js";

//selector cart quantity added method
export function selectedCartValue(productId){
const selectorElement = document.querySelector(`.js-quantity-selector-${productId}`);
let selectedValue = Number(selectorElement.value);
console.log("selected value " + selectedValue);
return selectedValue;
}

  //update total quantity
export function updateCartQuantities(){
let cartQuantity = 0;

cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
})

console.log("total quantity " + cartQuantity);
document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

//Message fade out function
export function fadeMessageOut(productId){
    let fadeTimeOut;
    const addedCartMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    if(fadeTimeOut){
        clearTimeout(fadeTimeOut);
    }
    addedCartMessage.style.opacity = 1;

    fadeTimeOut = setTimeout(() => {
        addedCartMessage.style.opacity = 0;
    }, 3000);
}

//itemCounts
export function itemCount(){
    let cartQuantities = 0;
    cart.forEach((cartItem) => {
        cartQuantities += cartItem.quantity;
    });
    return cartQuantities;
}


//add items to checkout html
export function addItemCount(){
    const itemCountElement = document.querySelector('.js-return-to-home-link');
    itemCountElement.innerHTML = `${itemCount()} items`;
}