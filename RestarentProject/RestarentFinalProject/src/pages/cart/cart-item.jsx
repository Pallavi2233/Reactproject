import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
  const {id,productName,price,productImage}=props.data;
  const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext)
  return (
    <div className='cartItems' >
      <img src={productImage} alt=''/>
      <div className='description'>
      <p>  <b>{productName}</b></p>
    
       <p>RS.{price}</p>
       <div className='counthandlers'>
        <button onClick={()=>addToCart(id)}>+</button>
        <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
        <button onClick={()=>removeFromCart(id)}>-</button>
       </div>
      </div>

    </div>
  )
}

export default CartItem