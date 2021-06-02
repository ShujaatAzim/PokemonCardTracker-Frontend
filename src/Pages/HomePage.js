import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cardsState } from '../Recoil/atoms';
import Card from '../Components/Card';
import CardInfo from '../Components/CardInfo';

const HomePage = props => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useRecoilState(cardsState)
  const [showCard, setShowCard] = useState(null)

  useEffect(() => {
    getCards()
    // eslint-disable-next-line
  }, [])

  const getCards = () => {
    fetch('http://localhost:3000/cards', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(data => setCards(data))
    .then(() => setLoading(false))
  }

  return (
    loading ? <div>Loading...</div> : 
    <div style={{ display: "flex" }}>
      <div style={{ width: "65%" }}>
        {cards.filter(card => card.set === props.set).map(card => <Card key={card.id} card={card} setShowCard={setShowCard} />)}
      </div>
      <div style={{ width: "35%" }}>
        {showCard ? <CardInfo key={showCard.id} creds={creds} card={showCard} getCards={getCards} setLoading={setLoading} setShowCard={setShowCard} /> : null}
      </div>
    </div>
  );
}

export default HomePage;