import React, { useState } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';

const CardInfo = props => {

  const { card } = props

  const [quantity, setQuantity] = useState(card.quantity)
  const [notes, setNotes] = useState(card.notes)

  return (
    <div>
      <h2>{card.name}</h2>
      <img src={card.image} alt={card.name} style={{ height: "20rem" }}/>
      <br />
      <h4>Quantity: {" " + quantity }</h4>
      <Button color="green" onClick={() => setQuantity(quantity + 1)}>+</Button>
      <Button color="red" onClick={() => setQuantity(quantity - 1)}>-</Button>
      <br />
      <h4>Notes</h4>
      <Form>
        <TextArea value={notes} rows={4} style={{ width: "50%" }} onChange={e => setNotes(e.target.value)}/>
      </Form>
      <br />
      <Button color="blue">Submit Changes</Button>
    </div>
  );
}

export default CardInfo;