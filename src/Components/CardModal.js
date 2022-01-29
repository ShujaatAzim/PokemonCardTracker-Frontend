import React, { useState } from 'react';
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react';
import swal from 'sweetalert';
import url from "../urlHelper";

const CardModal = props => {

  const { card, open, setOpen, creds, getCards, canEdit } = props;

  const [quantity, setQuantity] = useState(card.quantity)
  const [notes, setNotes] = useState(card.notes)

  const handleSubmit = () => {
    let newCardInfo = {
      quantity: quantity,
      notes: notes
    }
    fetch(`${url}/cards/${card.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newCardInfo)
    })
    .then(resp => resp.json())
    .then(() => {getCards();setOpen(false)})
    .then(() => swal(`${card.name} Updated!`, `Your ${card.name} card info has been updated!`, "success"))
  }

  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
      <Modal.Header>{card.name} - {card.set}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={card.image} wrapped />
        <Modal.Description>
          <Header>{card.name}</Header>
          <p>Notes:</p>
          <Form>
            { canEdit ? 
            <TextArea value={notes} rows={4} onChange={e => setNotes(e.target.value)}/> : 
            <p>{notes}</p> }
          </Form>
          <br />
          <p>Quantity: {quantity}</p>
        { canEdit ? <Button color="green" onClick={() => {setQuantity(quantity + 1)}}>+</Button> : null }
        { canEdit ? <Button color="red" disabled={quantity < 1} onClick={() => setQuantity(quantity - 1)}>-</Button> : null }
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>{canEdit ? "Cancel" : "Close"}</Button>
        { canEdit ? <Button
          content="Submit Changes"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {setOpen(false);handleSubmit()}}
          positive
          disabled={ quantity === card.quantity && notes === card.notes }
        /> : null }
      </Modal.Actions>
    </Modal>
  )
}

export default CardModal;