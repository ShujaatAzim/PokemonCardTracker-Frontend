import React, { useState } from 'react';
import CardModal from './CardModal';

const Card = props => {

  const { card } = props
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <img 
        className="card"
        style={{ 
          height: "15rem", 
          margin: "0rem 0.5rem 0.5rem 0.5rem", 
          opacity: card.quantity !== 0 ? "100%" : "35%" 
        }} 
        src={card.image} 
        alt="card" 
        onClick={() => {props.setShowCard(props.card);setOpen(!open)}}
      />
      {open ? <CardModal card={card} open={open} setOpen={setOpen} /> : null}
    </React.Fragment>
  );
}

export default Card;