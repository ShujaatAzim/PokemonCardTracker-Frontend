import React, { useState } from 'react';
import { Button, Form, Image, Modal, TextArea } from 'semantic-ui-react';
import { setSymbols } from '../Data/Symbols';
import { raritySymbols } from '../Data/Symbols'
import swal from 'sweetalert';
import url from "../urlHelper";

const CardModal = props => {

  const { card, open, setOpen, creds, getCards, canEdit } = props;

  const [quantity, setQuantity] = useState(card.quantity);
  const [notes, setNotes] = useState(card.notes);

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
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} size="small">
      <Modal.Header style={{ textAlign: "center" }}>{card.name} <img src={`${setSymbols[card.set]}`} alt='set symbol' style={{ height: "15px" }} /></Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={card.image} wrapped />
        <Modal.Description>
          <p><b>Set:</b> {card.set}</p>
          <p><b>Rarity:</b> 
            {" "} <img src={raritySymbols[card.rarity]} alt={card.rarity} /> ({card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)}) 
          </p>
          <p><b>Quantity:</b> {quantity}</p>
        { canEdit ? <Button color="green" onClick={() => {setQuantity(quantity + 1)}}>+</Button> : null }
        { canEdit ? <Button color="red" disabled={quantity < 1} onClick={() => setQuantity(quantity - 1)}>-</Button> : null }
          <br />
          <br />
          <p><b>Notes:</b></p>
          <Form>
            { canEdit ? 
            <TextArea value={notes} rows={4} onChange={e => setNotes(e.target.value)} placeholder="add description here (condition, wants, etc)" /> : 
            <p>{notes}</p> }
          </Form>
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