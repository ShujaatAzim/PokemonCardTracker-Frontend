import React from 'react';

const Card = props => {

  const { card } = props

  return (
    <img 
      style={{ height: "15rem", margin: "0rem 0.5rem 0.5rem 0.5rem", opacity: card.owned ? "100%" : "30%" }} 
      src={card.image} 
      alt="card" 
      onClick={() => props.setShowCard(card)}
    />
  );
}

export default Card;