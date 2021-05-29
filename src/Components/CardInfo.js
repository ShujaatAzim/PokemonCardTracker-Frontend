import React from 'react';

const CardInfo = props => {

  return (
    <div>
      {props.card.name}
      <br />
      <img src={props.card.image} alt={props.card.name} style={{ height: "25rem" }}/>
      <br />
      <br />
      Quantity:
      <br />
      { props.card.quantity}
      <br />
      <br />
      <label>Notes</label>
      <br />
      <textarea value={props.card.notes} />
    </div>
  );
}

export default CardInfo;