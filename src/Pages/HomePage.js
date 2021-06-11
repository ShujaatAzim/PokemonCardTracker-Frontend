import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cardsState } from '../Recoil/atoms';
import Card from '../Components/Card';
import CardInfo from '../Components/CardInfo';
import { Button } from 'semantic-ui-react';

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
    loading ? <div>Loading...</div> : props.set === "" ? 
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome, {creds.username}!</h1>
      <h4>Choose a set:</h4>
      <div>
        <Button style={{ margin: "1rem" }} color="blue" size="large" onClick={() => props.setSet("base")}>Base Set</Button>
        <Button style={{ margin: "1rem" }} color="green" size="large" onClick={() => props.setSet("jungle")}>Jungle</Button>
        <Button style={{ margin: "1rem" }} color="brown" size="large" onClick={() => props.setSet("fossil")}>Fossil</Button>
      </div>
      <div>
        <Button style={{ margin: "1rem" }} color="black" size="large" onClick={() => props.setSet("rocket")}>Team Rocket</Button>
        <Button style={{ margin: "1rem" }} color="orange" size="large" onClick={() => props.setSet("heroes")}>Gym Heroes</Button>
        <Button style={{ margin: "1rem" }} color="yellow" size="large" onClick={() => props.setSet("challenge")}>Gym Challenge</Button>
      </div>
      <div>
        <Button style={{ margin: "1rem" }} color="violet" size="large" onClick={() => props.setSet("genesis")}>Neo Genesis</Button>
        <Button style={{ margin: "1rem" }} color="pink" size="large" onClick={() => props.setSet("discovery")}>Neo Discovery</Button>
        <Button style={{ margin: "1rem" }} color="purple" size="large" onClick={() => props.setSet("revelations")}>Neo Revelations</Button>
        <Button style={{ margin: "1rem" }} color="teal" size="large" onClick={() => props.setSet("destiny")}>Neo Destiny</Button>
      </div>
    </div> :
    <div style={{ display: "flex" }}>
      <div style={{ width: "65%" }}>
        {cards.filter(card => card.set === props.set).map(card => <Card key={card.id} card={card} setShowCard={setShowCard} />)}
      </div>
      <div style={{ width: "35%" }}>
        { showCard ? <CardInfo key={showCard.id} creds={creds} card={showCard} getCards={getCards} setLoading={setLoading} setShowCard={setShowCard} /> : 
          <h2>Choose a card!</h2> }
      </div>
    </div>
  );
}

export default HomePage;