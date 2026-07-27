import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // Method 1: Increments counter state
  const incrementValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Method 2: Displays alert greeting
  const sayHello = () => {
    alert('Hello! Member1');
  };

  // Multiple methods invoked by the Increment button
  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  // Decrement counter
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function accepting an argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event handler demonstration
  const handleCustomClick = (e) => {
    alert('I was clicked');
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{count}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '120px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
        <button onClick={handleCustomClick}>Click on me</button>
      </div>
    </div>
  );
}