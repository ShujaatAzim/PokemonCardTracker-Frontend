import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cardsState } from '../Recoil/atoms';
import Card from '../Components/Card';
import SetButtonsScreen from '../Components/SetButtonsScreen';
import LoadingScreen from '../Components/LoadingScreen';
import url from '../urlHelper';
import { Button } from 'semantic-ui-react';
import { setSymbols } from '../Data/Symbols';
import { raritySymbols } from '../Data/Symbols';

const HomePage = props => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"));
  
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useRecoilState(cardsState);
  const [rarity, setRarity] = useState("all");
  const [cardType, setCardType] = useState("all");
  const [count, setCount] = useState(0);

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
        <h1>{set} {setSymbols[set]}</h1>
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
            <Button circular toggle onClick={() => setRarity("holo")} active={rarity === "holo"}>{raritySymbols.holo}</Button>
            <Button circular toggle onClick={() => setRarity("rare")} active={rarity === "rare"}>{raritySymbols.rare}</Button>
            <Button circular toggle onClick={() => setRarity("uncommon")} active={rarity === "uncommon"}>{raritySymbols.uncommon}</Button>
            <Button circular toggle onClick={() => setRarity("common")} active={rarity === "common"}>{raritySymbols.common}</Button>
          </div>
          <br />
        </div>
        <br />
        <div>
          { rarity === "all" && cardType === "all" ? cards.filter(card => card.set === set).map((card, i, a) => 
              <Card key={a[i].id} creds={creds} card={a[i + count]} getCards={getCards} canEdit={true} i={i} a={a} count={count} setCount={setCount} />) 
            : rarity !== "all" && cardType === "all" ? cards.filter(card => card.set === set && card.rarity === rarity).map((card, i, a) => 
              <Card key={a[i].id} creds={creds} card={a[i + count]} getCards={getCards} canEdit={true} i={i} a={a} count={count} setCount={setCount} />)
            : rarity === "all" && cardType !== "all" ? cards.filter(card => card.set === set && card.card_type === cardType).map((card, i, a) => 
              <Card key={a[i].id} creds={creds} card={a[i + count]} getCards={getCards} canEdit={true} i={i} a={a} count={count} setCount={setCount} />) 
            : cards.filter(card => card.set === set && card.rarity === rarity && card.card_type === cardType).length !== 0 ? 
              cards.filter(card => card.set === set && card.rarity === rarity && card.card_type === cardType).map((card, i, a) => 
              <Card key={a[i].id} creds={creds} card={a[i + count]} getCards={getCards} canEdit={true} i={i} a={a} count={count} setCount={setCount} />) 
            : <p>{`NO ${cardType.toUpperCase()} CARDS OF ${rarity.toUpperCase()} RARITY IN THIS SET!`}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;