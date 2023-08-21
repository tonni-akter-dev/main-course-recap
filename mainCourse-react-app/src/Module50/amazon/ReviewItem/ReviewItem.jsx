import React from "react";
import "./Review.css";
const ReviewItem = ({ product }) => {
  const { img, id, name, price, quantity } = product;

  return (
    <div className="reviewItem">
      <img src={img} alt="" />
      <div className="review_details">
        <p className="product_title">{name}</p>
        <p>
          Price: <span className="orange_text">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="orange_text">{quantity}</span>
        </p>
      </div>
      <button className="btn_delete">D</button>
    </div>
  );
};

export default ReviewItem;
