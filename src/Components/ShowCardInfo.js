import React, { useState } from 'react';

const ShowCardInfo = props => {

  const { card } = props

  const [quantity, setQuantity] = useState(card.quantity)
  const [notes, setNotes] = useState(card.notes)

  return (
    <div>
      <h2>{card.name}</h2>
      <img className="show-card" src={card.image} alt={card.name} style={{ height: "20rem" }}/>
      <br />
      <h4>Quantity: {" " + quantity }</h4>
      <br />
      <h4>Notes</h4>
    </div>
  );
}

export default ShowCardInfo;