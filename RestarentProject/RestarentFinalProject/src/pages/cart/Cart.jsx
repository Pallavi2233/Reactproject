import React, { useContext } from 'react'
import { PRODUCTS } from "../../products";
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const{cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalamount=getTotalCartAmount()
  let navigate=useNavigate();
  return (
    <div className='cart'>
    <div>
      <h1 align="right">Your Cart items</h1>
    </div>
    <div className='cartItems'>
      {PRODUCTS.map((product)=>{
        if(cartItems[product.id] !==0){
          return(
            <CartItem  data={product}/>
          )
        }

      })}
    </div>
    {totalamount >0 ?(
    <div className='chechout'>
      <p> TotalBill:Rs.{totalamount}</p>
      <button onClick={()=>navigate("/")}>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  ):(
    <h1>Your cart is empty please select products</h1>

  )}
    </div>
  )
}

export default Cart