import React from 'react';

function ClauseInfoModal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: '20%', left: '30%', background: 'white', padding: '20px', border: '1px solid black' }}>
      <h2>{item.item} Details</h2>
      <p>Rate: {item.rate}</p>
      <p>Quantity: {item.quantity || 1}</p>
      <p>IRC Clause: Sample clause for {item.item}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ClauseInfoModal;
