import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../fakeDb";
import { Link } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step 1 get
    for (const id in storedCart) {
      //step 2
      const addededProducts = products.find((product) => product.id === id);
      if (addededProducts) {
        //step 3 get quantity of the product
        const quantity = storedCart[id];
        addededProducts.quantity = quantity;
        savedCart.push(addededProducts);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            <button>Review order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
