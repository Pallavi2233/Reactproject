import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext=createContext(null);
const globalDeafults=()=>{
    let cart={};
    for(let i=0;i<PRODUCTS.length;i++){
        cart[i]=0;
    }
    return cart;

}
export  const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(globalDeafults());
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
        const updateCartItemCount=(newAmount,itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:newAmount}))

        }  
        const context1={
            cartItems,setCartItems,addToCart,removeFromCart,updateCartItemCount
        } 
        console.log(cartItems) ;
        return(
            <ShopContext.Provider value={context1}>
                {props.children}
            </ShopContext.Provider>
        )
    
}