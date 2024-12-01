import React from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Item 1', price: '$20' },
    { id: 2, name: 'Item 2', price: '$35' },
    { id: 3, name: 'Item 3', price: '$50' },
  ];

  const handleRemove = (id) => {
    console.log(`Remove item with id: ${id}`);
    // Implement the remove functionality here
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3 className="item-title">{item.name}</h3>
            <p className="item-price">{item.price}</p>
            <button
              className="remove-btn"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
