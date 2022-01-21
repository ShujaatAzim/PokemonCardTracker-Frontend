import React, { useState } from 'react';
import CardModal from './CardModal';

const Card = props => {

  const { card, creds, getCards, canEdit } = props
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <img 
        className="card"
        style={{ 
          height: "15rem", 
          margin: "0rem 0.5rem 0.5rem 0.5rem", 
          opacity: card.quantity === 0 ? "35%" : "100%" 
        }} 
        src={card.image} 
        alt="card" 
        onClick={() => setOpen(!open)}
      />
      {open ? <CardModal card={card} creds={creds} open={open} setOpen={setOpen} getCards={getCards} canEdit={canEdit} /> : null}
    </React.Fragment>
  );
}

export default Card;