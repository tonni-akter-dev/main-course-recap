import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleDelete }) => {
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
      <button className="btn_delete" onClick={() => handleDelete(id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
