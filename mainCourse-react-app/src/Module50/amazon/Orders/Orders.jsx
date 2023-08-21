import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'
const Orders = () => {
  const savedCart = useLoaderData();
const [cart,setCart]=useState(savedCart)

const handleDelete=()=>{
  
}


  return (
    <div className="shop-container">
      <div className="review-container">
        <h1>Order's page {savedCart.length}</h1>
        {savedCart.map((product) => (
          <ReviewItem key={product.id} product={product} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={savedCart} />
      </div>
    </div>
  );
};

export default Orders;
