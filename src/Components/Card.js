import React from 'react';

const Card = props => {

  const { card } = props

  return (
    <img 
      className="card"
      style={{ 
        height: "15rem", 
        margin: "0rem 0.5rem 0.5rem 0.5rem", 
        opacity: card.quantity !== 0 ? "100%" : "35%" 
      }} 
      src={card.image} 
      alt="card" 
      onClick={() => props.setShowCard(props.card)}
    />
  );
}

export default Card;