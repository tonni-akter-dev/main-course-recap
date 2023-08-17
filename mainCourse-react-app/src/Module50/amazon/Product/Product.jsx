import React from "react";

const Product = (props) => {
  const { img, name, seller,price, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="products_info">
        <h6 className="product_name">{name}</h6>
        <p>Price:${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating:{ratings}</p>
      </div>
      <button
        className="btn_cart"
        onClick={() => {
          handleAddToCart(props.product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
