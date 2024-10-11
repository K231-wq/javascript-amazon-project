import { cart } from "../data/cart.js";
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