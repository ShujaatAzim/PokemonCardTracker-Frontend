import React from 'react';

const Card = props => {
  return (
    <img 
      style={{ height: "15rem", margin: "0rem 0.5rem 0.5rem 0.5rem" }} 
      src={`https://images.pokemontcg.io/base1/${props.number}_hires.png`} 
      alt="card" 
    />
  );
}

export default Card;