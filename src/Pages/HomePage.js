import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cardsState } from '../Recoil/atoms';
import Card from '../Components/Card';
import CardInfo from '../Components/CardInfo';
import SetButtonsScreen from '../Components/SetButtonsScreen';
import LoadingScreen from '../Components/LoadingScreen';

const HomePage = props => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useRecoilState(cardsState)
  const [showCard, setShowCard] = useState(null)

  const { set, setSet } = props;

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
    .then(() => setTimeout(() => setLoading(false), 500))
  }

  return (
    loading ? <LoadingScreen /> : set === "" ? <SetButtonsScreen setSet={setSet} /> :
    <div style={{ display: "flex" }}>
      <div style={{ width: "65%", marginTop: "1rem" }}>
        {cards.filter(card => card.set === set).map(card => <Card key={card.id} card={card} setShowCard={setShowCard} />)}
      </div>
      <div style={{ width: "35%" }}>
        { showCard ? <CardInfo key={showCard.id} creds={creds} card={showCard} getCards={getCards} setLoading={setLoading} setShowCard={setShowCard} /> : 
          <h2>Choose a card!</h2> }
      </div>
    </div>
  );
}

export default HomePage;