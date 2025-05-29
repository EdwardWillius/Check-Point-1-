// PaymentMethod.jsx
import React, { useState } from 'react';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Payment Method</h2>
      <p>Select your preferred payment method:</p>
      <select
        value={selectedMethod}
        onChange={handleChange}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          width: '200px',
        }}
      >
        <option value="" disabled>Select a method</option>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bank-transfer">Bank Transfer</option>
        <option value="cash-on-delivery">Cash on Delivery</option>
        <option value="qris">QRIS</option>
      </select>

      {selectedMethod && (
        <div style={{ marginTop: '20px' }}>
          <h3>You have selected: {selectedMethod}</h3>
          {/* Implementasi lebih lanjut bisa ditambahkan di sini */}
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;