import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cardsState } from '../Recoil/atoms';
import Card from '../Components/Card';
import SetButtonsScreen from '../Components/SetButtonsScreen';
import LoadingScreen from '../Components/LoadingScreen';
import url from "../urlHelper";
import { Button } from 'semantic-ui-react';

const HomePage = props => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useRecoilState(cardsState)
  const [rarity, setRarity] = useState("none")
  const [cardType, setCardType] = useState("none")

  const { set, setSet } = props;

  useEffect(() => {
    getCards()
    // eslint-disable-next-line
  }, [])

  const getCards = () => {
    fetch(`${url}/cards`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(data => setCards(data))
    .then(() => setTimeout(() => setLoading(false), 100))
  }

  return (
    loading ? <LoadingScreen /> : set === "" ? <SetButtonsScreen setSet={setSet} /> :
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>{set}</h1>
        <br />
        <div>
          <div>
            <Button circular toggle onClick={() => setCardType("all")} active={cardType === "all"}>All</Button>
            <Button circular toggle onClick={() => setCardType("pokemon")} active={cardType === "pokemon"}>Pokemon</Button>
            <Button circular toggle onClick={() => setCardType("trainer")} active={cardType === "trainer"}>Trainer</Button>
            <Button circular toggle onClick={() => setCardType("energy")} active={cardType === "energy"}>Energy</Button>
          </div>
          <br />
          <div>
            <Button circular toggle onClick={() => setRarity("all")} active={rarity === "all"}>All</Button>
            <Button circular toggle onClick={() => setRarity("holo")} active={rarity === "holo"}>Holos</Button>
            <Button circular toggle onClick={() => setRarity("rare")} active={rarity === "rare"}>Rares</Button>
            <Button circular toggle onClick={() => setRarity("uncommon")} active={rarity === "uncommon"}>Uncommons</Button>
            <Button circular toggle onClick={() => setRarity("common")} active={rarity === "common"}>Commons</Button>
          </div>
          <br />
        </div>
        <br />
        <div>
          { rarity === "all" && cardType === "all" ? cards.filter(card => card.set === set).map(card => 
              <Card key={card.id} creds={creds} card={card} getCards={getCards} canEdit={true} />) 
            : rarity !== "all" && cardType === "all" ? cards.filter(card => card.set === set && card.rarity === rarity).map(card => 
              <Card key={card.id} creds={creds} card={card} getCards={getCards} canEdit={true} />)
            : rarity === "all" && cardType !== "all" ? cards.filter(card => card.set === set && card.card_type === cardType).map(card => 
              <Card key={card.id} creds={creds} card={card} getCards={getCards} canEdit={true} />) 
            : cards.filter(card => card.set === set && card.rarity === rarity && card.card_type === cardType).length !== 0 ? 
              cards.filter(card => card.set === set && card.rarity === rarity && card.card_type === cardType).map(card => 
              <Card key={card.id} creds={creds} card={card} getCards={getCards} canEdit={true} />) 
            : <p>{`NO ${cardType.toUpperCase()} CARDS OF ${rarity.toUpperCase()} RARITY IN THIS SET!`}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;