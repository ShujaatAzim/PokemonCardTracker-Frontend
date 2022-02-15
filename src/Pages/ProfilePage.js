import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Label } from 'semantic-ui-react';
import url from '../urlHelper';

const ProfilePage = () => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"));
  const history = useHistory();

  const [cards, setCards] = useState([])

  const deleteAccount = e => {
    e.preventDefault();
    fetch(`${url}/users/${creds.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(() => localStorage.removeItem("trackerCreds"))
    .then(() => history.push('/'))
  }

  const getCards = () => {
    fetch(`${url}/collection/${creds.id}`)
    .then(resp => resp.json())
    .then(data => setCards(data))
  }

  useEffect(() => {
    getCards()
    // eslint-disable-next-line
  }, [])

  let ownedCards = cards.filter(card => card.quantity > 0)

  return (
    <div style={{ textAlign: "center", alignContent: "center" }}>
      <h1>{creds.username}'s Profile</h1>
      <h3>Share your collection with this link!</h3>
      <h3>https://pokebook.shujaatazim.com/collection/{creds.id}</h3>
      <br />
      <div>
        <Label>
          Base Set: {ownedCards.filter(card => card.set === "Base Set").length} / 16
        </Label>
        <Label>
          Jungle Set: {ownedCards.filter(card => card.set === "Jungle").length} / 16
        </Label>
        <Label>
          Fossil Set: {ownedCards.filter(card => card.set === "Fossil").length} / 15
        </Label>
        <Label>
          Base Set 2: {ownedCards.filter(card => card.set === "Base Set 2").length} / 20
        </Label>
        <Label>
          Team Rocket Set: {ownedCards.filter(card => card.set === "Team Rocket").length} / 17
        </Label>
        <Label>
          Gym Heroes Set: {ownedCards.filter(card => card.set === "Gym Heroes").length} /19
        </Label>
        <Label>
          Gym Challenge Set: {ownedCards.filter(card => card.set === "Gym Challenge").length} / 20
        </Label>
        <Label>
          Neo Genesis Set: {ownedCards.filter(card => card.set === "Neo Genesis").length} / 19
        </Label>
        <Label>
          Neo Discovery Set: {ownedCards.filter(card => card.set === "Neo Discovery").length} / 17
        </Label>
        <Label>
          Neo Revelations Set: {ownedCards.filter(card => card.set === "Neo Revelations").length} / 14
        </Label>
        <Label>
          Neo Destiny Set: {ownedCards.filter(card => card.set === "Neo Destiny").length} / 24
        </Label>
        <Label>
          Total Cards: {ownedCards.length} / {creds.cards.length}
        </Label>
      </div>
      <br />
      <br />
      <div>
        { creds.username !== "Test" ? <Button color="red" onClick={e => deleteAccount(e)}>Delete Account</Button> : null }
      </div>
    </div>
  );
}

export default ProfilePage;