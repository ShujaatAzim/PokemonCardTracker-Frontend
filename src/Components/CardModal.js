import React, { useState, useEffect, useCallback } from 'react';
import { Button, Form, Image, Modal, TextArea, Label, Icon } from 'semantic-ui-react';
import { setSymbols } from '../Data/Symbols';
import { raritySymbols } from '../Data/Symbols';
import swal from 'sweetalert';
import url from '../urlHelper';

const CardModal = props => {

  const { card, open, setOpen, creds, getCards, canEdit, count, setCount, i, a } = props;

  const [quantity, setQuantity] = useState(card.quantity);
  const [notes, setNotes] = useState(card.notes);

  const moveCard = useCallback(e => {
    if (e.key === "ArrowLeft" && i + count !== 0) {
      setCount(count - 1)
      setNotes(card.notes)
      setQuantity(card.quantity)
    } else if (e.key === "ArrowRight" && i + count !== a.length -1) {
      setCount(count + 1)
      setNotes(card.notes)
      setQuantity(card.quantity)
    }
  }, [card, a, count, setCount, i])

  useEffect(() => {
    setQuantity(card.quantity);
    setNotes(card.notes)
    document.addEventListener("keydown", moveCard, false)
    return () => { 
      document.removeEventListener("keydown", moveCard, false)
    }
  }, [card, moveCard]);

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
    .then(() => {getCards();setOpen(false);setCount(0)})
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
          { canEdit ? <div>
            <Button circular color="green" size="mini" onClick={() => {setQuantity(quantity + 1)}}>+</Button>
            <Button circular color="red" size="mini" disabled={quantity < 1} onClick={() => setQuantity(quantity - 1)}>-</Button>
          </div> : null }
          <br />
          <br />
          <p><b>{ canEdit ? "Notes:" : "Owner's Notes:" }</b></p>
          <div>
            <Form>
              <TextArea 
                disabled={!canEdit} 
                value={notes} 
                rows={4} 
                onChange={e => setNotes(e.target.value)} 
                placeholder="add description here (card conditions, wants, price, etc)" 
              />
            </Form>
          </div>
          <br />
          <div>
            <Button color='blue' circular icon labelPosition='left' disabled={i + count === 0 } 
              onClick={() => {setCount(count - 1);setNotes(card.notes);setQuantity(card.quantity)}}>
              Prev
              <Icon name='left arrow' />
            </Button>
            <Button color='blue' circular icon labelPosition='right' disabled={i + count === a.length -1 } 
              onClick={() => {setCount(count + 1);setNotes(card.notes);setQuantity(card.quantity)}}>
              Next
              <Icon name='right arrow' />
            </Button>
          </div>
          <br />
          <i>(Use arrow keys to navigate!)</i>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => {setOpen(false); setCount(0)}}>{canEdit ? "Cancel" : "Close"}</Button>
        { canEdit ? <Button
          content='Submit Changes'
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