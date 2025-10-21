import React from 'react';

function InterventionCard({ item, onClick }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', cursor: 'pointer' }} onClick={onClick}>
      <h3>{item.item}</h3>
      <p>Rate: {item.rate}</p>
      <p>Quantity: {item.quantity || 1}</p>
    </div>
  );
}

export default InterventionCard;
