import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext=createContext(null);
const globalDeafults=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+ 1;i++){
        cart[i]=0;
    }
    return cart;

}
export  const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(globalDeafults());
    
    const getTotalCartAmount=()=>{
        let totalamount=0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                let iteminfo=PRODUCTS.find((product)=>product.id===Number(item));
                 totalamount +=cartItems[item]*iteminfo.price;
            }
           
        }
        return totalamount;
    }


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
            cartItems,setCartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount
        } 
        console.log(cartItems) ;
        return(
            <ShopContext.Provider value={context1}>
                {props.children}
            </ShopContext.Provider>
        )
    
}