import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";
const Shop = () => {
  return (
    <div>
      <div></div>
      <div className='"products'>
        {PRODUCTS.map((product,index) => (
          <li key={index}>
          
          <Product data={product} />
          </li>
          
        ))}
      </div>
    </div>
  );
};

export default Shop;
