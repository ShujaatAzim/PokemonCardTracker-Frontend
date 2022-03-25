import React, { useState, useEffect } from 'react';
import { Button, Form, Image, Modal, TextArea, Label } from 'semantic-ui-react';
import { setSymbols } from '../Data/Symbols';
import { raritySymbols } from '../Data/Symbols'
import swal from 'sweetalert';
import url from '../urlHelper';

const CardModal = props => {

  const { card, open, setOpen, creds, getCards, canEdit, count, setCount, i, a } = props;

  const [quantity, setQuantity] = useState(card.quantity);
  const [notes, setNotes] = useState(card.notes);

  useEffect(() => {
    setQuantity(card.quantity);
  }, [card]);

  useEffect(() => {
    setNotes(card.notes)
  },[card]);

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
    <Modal onClose={() => {setOpen(false); setCount(0)}} onOpen={() => setOpen(true)} open={open} size="small">
      <Modal.Header style={{ textAlign: "center" }}>{card.name} {setSymbols[card.set]}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={card.image} wrapped />
        <Modal.Description>
          <p>{" "}{raritySymbols[card.rarity]} ({card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)})</p>
          <Label>{card.set}</Label>
          <br />
          <br />
          <Label>Quantity : <Label.Detail>{quantity}</Label.Detail></Label>
          <br />
          <br />
          <div>
            { canEdit ? <Button circular color="green" size="mini" onClick={() => {setQuantity(quantity + 1)}}>+</Button> : null }
            { canEdit ? <Button circular color="red" size="mini" disabled={quantity < 1} onClick={() => setQuantity(quantity - 1)}>-</Button> : null }
          </div>
          <br />
          <br />
          <p><b>Notes:</b></p>
          <Form>
            { canEdit ? 
            <TextArea value={notes} rows={4} onChange={e => setNotes(e.target.value)} placeholder="add description here (condition, wants, etc)" /> : 
            <p style={{ width: "300px", rows: "4"}}>{notes}</p> }
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => {setOpen(false); setCount(0)}}>{canEdit ? "Cancel" : "Close"}</Button>
        { canEdit ? <Button
          content="Submit Changes"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {setOpen(false);handleSubmit()}}
          positive
          disabled={ quantity === card.quantity && notes === card.notes }
        /> : null }
        <Button disabled={i + count === 0} onClick={() => setCount(count - 1)}>Prev</Button>
        <Button disabled={i + count === a.length -1 } onClick={() => setCount(count + 1)}>Next</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CardModal;