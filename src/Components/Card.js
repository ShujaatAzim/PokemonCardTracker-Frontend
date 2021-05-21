import React, { useState } from 'react';

const Card = props => {

  const { card } = props.card

  const [showCard, setShowCard] = useState(false)
  
  return (
    <img 
      style={{ height: "15rem", margin: "0rem 0.5rem 0.5rem 0.5rem", opacity: card.owned === true ? "100%" : "30%" }} 
      src={card.image} 
      alt="card" 
      onClick={() => setShowCard(!showCard)}
    />
  );
}

export default Card;