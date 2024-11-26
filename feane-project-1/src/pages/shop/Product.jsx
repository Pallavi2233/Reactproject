import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
  const {id,productName,price,productImage}=props.data;
  const{addToCart,cartItems}=useContext(ShopContext)
  return (
    <div className='product'>
    <img src={productImage} alt='foodimg'/>

    <div className='description'>
      <p>
        <b>{productName}</b>
      </p>
      <p>
        Rs.{price}
      </p>
      <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart</button>
    </div>
    </div>
  )
}

export default Product;