import React from 'react';

const ShowCardInfo = props => {

  const { card } = props

  return (
    <div>
      <h2>{card.name}</h2>
      <img className="show-card" src={card.image} alt={card.name} style={{ height: "20rem" }}/>
      <br />
      <h4>Quantity: {" " + quantity }</h4>
      <br />
      <h4>Notes:</h4>
      <p>{card.notes}</p>
    </div>
  );
}

export default ShowCardInfo;