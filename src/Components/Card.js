import React, { useState } from 'react';

const Card = props => {

  const { image, owned } = props

  const [showCard, setShowCard] = useState(false)

  return (
    <img 
      style={{ height: "15rem", margin: "0rem 0.5rem 0.5rem 0.5rem", opacity: owned ? "100%" : "30%" }} 
      src={image} 
      alt="card" 
      onClick={() => setShowCard(!showCard)}
    />
  );
}

export default Card;