import React, { useState } from "react";
import "./ShopingDEsign.css";

function SimpleEcommerce() {
  const [cart, setCart] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [products] = useState([
    { id: 1, name: "Bag", price: 500, image: "/P1.jpg" },
    { id: 2, name: "Watch", price: 1000, image: "/p2.jpeg" },
    { id: 3, name: "Apple AirPods", price: 7000, image: "/p3.jpg" },
  ]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1 className="heading">E-Commerce Site</h1>

      {/* Theme Toggle Button */}
      <button className="theme-btn" onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Cart Section */}
      <div className="cart">
        <div className="cart-details">
          <img src="/addtocart.png" alt="Cart" className="cart-icon" />
          <span className="value">{cart.length}</span>
          <h3 className="value-text">Total Price: ${getTotalPrice()}</h3>
        </div>
      </div>

      {/* Products Section */}
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <span>
                {product.name} - ${product.price.toFixed(2)}
              </span>
            </div>

            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Cart Details */}
      {cart.length > 0 && (
        <div>
          <h2>Cart Details</h2>
          <ul className="cart-details">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                {item.name} - ${item.price.toFixed(2)}
                <button
                  className="aremove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SimpleEcommerce;
