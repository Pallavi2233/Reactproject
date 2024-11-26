import React, { useContext } from 'react'

const CartItem = (props) => {
  const {id,productName,price,productImage}=props.data;
  const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext)
  return (
    <div className='cartItems' >

    </div>
  )
}

export default CartItem