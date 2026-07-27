import React, { useState } from 'react';

export default function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert entered amount based on fixed rate shown in exercise output (80 * 80 = 6400)
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount)) {
      const convertedAmount = numericAmount * 80;
      alert(`Converting to Euro Amount is ${convertedAmount}`);
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ width: '80px', display: 'inline-block' }}>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ width: '80px', display: 'inline-block' }}>Currency:</label>
          <textarea
            rows="2"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>

        <div style={{ paddingLeft: '80px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}