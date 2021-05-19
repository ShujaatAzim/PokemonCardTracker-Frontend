import React, { useState } from 'react';

const Card = props => {

  const [owned, setOwned] = useState(props.card.owned)
  
  return (
    <img 
      style={{ height: "15rem", margin: "0rem 0.5rem 0.5rem 0.5rem", opacity: owned ? "100%" : "50%" }} 
      src={props.card.image} 
      alt="card" 
      onClick={() => setOwned(!owned)}
    />
  );
}

export default Card;