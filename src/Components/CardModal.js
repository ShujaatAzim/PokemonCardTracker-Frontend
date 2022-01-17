import React, { useState } from 'react';
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react';

const CardModal = props => {

  const { card, open, setOpen } = props;

  const [quantity, setQuantity] = useState(card.quantity)
  const [notes, setNotes] = useState(card.notes)
  const [updated, setUpdated] = useState(false)

  const handleSubmit = () => {
    console.log("submitted")
  }

  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
      <Modal.Header>{card.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={card.image} wrapped />
        <Modal.Description>
          <Header>{card.name} - {card.set}</Header>
          <p>Notes:</p>
          <Form>
            <TextArea value={notes} rows={4} onChange={e => {setNotes(e.target.value);setUpdated(true)}}/>
          </Form>
          <p>Number owned: {quantity}</p>
        <Button color="green" onClick={() => {setQuantity(quantity + 1);setUpdated(true)}}>+</Button>
        <Button color="red" disabled={quantity < 1} onClick={() => {setQuantity(quantity - 1);setUpdated(true)}}>-</Button>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>Cancel</Button>
        <Button
          content="Submit Changes"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {setOpen(false);handleSubmit()}}
          positive
          disabled={!updated}
        />
      </Modal.Actions>
    </Modal>
  )
}

export default CardModal;