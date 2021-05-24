import React, { useState } from 'react';

const CardInfo = props => {

  const card = props.card
  const [owned, setOwned] = useState(card.owned)

  return (
    <div>
      {card.name}
      <br />
      <img src={card.image} alt={card.name} style={{ height: "25rem" }}/>
      <br />
      <br />
      <label>Owned?</label>
      <br />
      <input type="checkbox" checked={owned} onChange={() => setOwned(!owned)} />
      <br />
      <br />
      { owned ? 
      <div>
        <label>How many?</label>
        <br />
        { card.quantity}
      </div> : null }
      <br />
      <br />
      <label>Notes</label>
      <br />
      <textarea value={card.notes} />
    </div>
  );
}

export default CardInfo;