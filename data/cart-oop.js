import { selectedCartValue } from "../scripts/util/general.js";

function Cart(localStorageKey){
    const cart = {
        cartItems: undefined,
    
        loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },{
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        },
        saveToLocalStorage(){
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        addToCart(productId){
            let matchingItem;
            
            this.cartItems.forEach((cartItem) => {
            if(cartItem.productId === productId){
                matchingItem = cartItem;
                }
            })
            
            if(matchingItem){
                matchingItem.quantity += 1;
            }else{
                this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
                });
            }
            this.saveToLocalStorage();
        },
        removeFromCart(productId){
            let newCart = [];
            this.cartItems.forEach((cartItem) => {
                if(cartItem.productId !== productId){
                    newCart.push(cartItem);
                }  
            });
            this.cartItems = newCart;
            this.saveToLocalStorage();
        },
        updateDeliveryOption(productId, deliveryoptionId){
            let matchingItem;
            this.cartItems.forEach((cartItem) => {
            if(cartItem.productId === productId){
            matchingItem = cartItem;
            }
            })
            matchingItem.deliveryOptionId = deliveryoptionId;
            this.saveToLocalStorage();
        },
        updateQuantity(productId, newQuantity) {
            let matchingItem;
            
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                matchingItem = cartItem;
                }
            });
            
            matchingItem.quantity = newQuantity;
            
            this.saveToLocalStorage();
        }
    };
    return cart;
}


let cart = Cart('cart-oop');
let cart2 = Cart('cart-business');
console.log(cart2);
console.log(cart);