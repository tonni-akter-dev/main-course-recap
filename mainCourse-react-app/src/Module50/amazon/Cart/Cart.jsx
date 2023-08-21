import React from "react";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order summery</h4>
      <p>selected items: {quantity}</p>
      <p>Total price: {total}</p>
      <p>Total shipping: {totalShipping}</p>
      <p>Tax :{tax} </p>
      <h6>Grand Total:{grandTotal} </h6>
    </div>
  );
};

export default Cart;
