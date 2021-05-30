import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

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
      <Form>
        <TextArea value={props.card.notes} />
      </Form>
    </div>
  );
}

export default CardInfo;