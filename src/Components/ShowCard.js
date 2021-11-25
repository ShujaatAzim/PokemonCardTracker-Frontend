import React from 'react';

const ShowCard = props => {

  const { card } = props

  return (
    <img 
      style={{ 
        height: "15rem", 
        margin: "0rem 0.5rem 0.5rem 0.5rem", 
        opacity: card.quantity !== 0 ? "100%" : "35%" }} 
      src={card.image} 
      alt="card" 
      onClick={() => console.log(card)}
    />
  );
}

export default ShowCard;