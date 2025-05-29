import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Football Ticket', quantity: 0, price: 50 },
    { id: 2, name: 'Basketball Ticket', quantity: 0, price: 30 },
    { id: 3, name: 'Basketball Ticket', quantity: 0, price: 30 },
    { id: 4, name: 'Basketball Ticket', quantity: 0, price: 30 },
    
  ]);
  
  

  const [additionalItems] = useState([
    { id: 1, name: 'Football Ticket', price: 50 },
    { id: 2, name: 'Basketball Ticket', price: 30 },
    { id: 3, name: 'Tennis Ticket', price: 40 },
    { id: 4, name: 'Swimming Ticket', price: 25 },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleAddItem = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  
  

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>{item.name} - Quantity: {item.quantity} - Price: ${item.price} each</span>
                <span>Total: ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h3 style={{ textAlign: 'right' }}>Total Price: ${totalPrice}</h3>
        </div>
      )}
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {additionalItems.map(item => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <span>{item.name} - Price: ${item.price}</span>
            <button onClick={() => handleAddItem(item)} style={{ marginLeft: '10px' }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;