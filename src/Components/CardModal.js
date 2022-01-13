import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const CardModal = props => {

  return (
    <Modal
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(true)}
      open={props.open}
    >
      <Modal.Header>{props.card.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={props.card.image} wrapped />
        <Modal.Description>
          <Header>{props.card.name} - {props.card.set}</Header>
          <p>{props.card.notes}</p>
          <p>Number owned: {props.card.quantity}</p>
        <Button color="green">+</Button>
        <Button color="red">-</Button>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => props.setOpen(false)}>Cancel</Button>
        <Button
          content="Submit Changes"
          labelPosition='right'
          icon='checkmark'
          onClick={() => props.setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default CardModal;