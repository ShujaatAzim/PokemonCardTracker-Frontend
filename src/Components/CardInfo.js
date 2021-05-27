import React, { useState } from 'react';

const CardInfo = props => {

  const [owned, setOwned] = useState(props.card.owned)

  return (
    <div>
      {props.card.name}
      <br />
      <img src={props.card.image} alt={props.card.name} style={{ height: "25rem" }}/>
      <br />
      <br />
      <label>Owned?</label>
      <br />
      <input type="checkbox" checked={props.card.owned} onClick={() => setOwned(!owned)} />
      <br />
      <br />
      { owned === true ? 
      <div>
        <label>How many?</label>
        <br />
        { props.card.quantity}
      </div> : null }
      <br />
      <br />
      <label>Notes</label>
      <br />
      <textarea value={props.card.notes} />
    </div>
  );
}

export default CardInfo;