import { selectedCartValue } from "../scripts/general.js";

export const cart = [];

export function addToCart(productId){
    let matchingItem;
  
    let selectedValue = selectedCartValue(productId);
  
    cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      matchingItem = cartItem;
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
  }