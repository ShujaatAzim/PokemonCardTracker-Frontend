import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import LoadingScreen from '../Components/LoadingScreen';
import Card from '../Components/Card';
import SetButtonsShare from '../Components/SetButtonsShare';
import { setSymbols, raritySymbols } from '../Data/Symbols';
import { Button } from 'semantic-ui-react';
import url from '../urlHelper';


const CollectionSharePage = props => {
  
  const { set, setSet } = props;
  
  const location = useLocation()
  const userID = (location.pathname.split("/")[2])

  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [username, setUsername] = useState("");
  const [rarity, setRarity] = useState("all");
  const [cardType, setCardType] = useState("all");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCollection()
    getUsername()
    // eslint-disable-next-line
  }, [])

  const getUsername = async () => {
    try {
      await fetch(`${url}/users/${userID}`)
      .then(resp => resp.json())
      .then(data => setUsername(data.username))
    } catch {
      console.log("error")
    }
  }

  const getCollection = async () => {
    try {
      await fetch(`${url}/collection/${userID}`)
      .then(resp => resp.json())
      .then(data => setCards(data))
      .then(() => setTimeout(() => setLoading(false), 100))
    } catch {
      console.log("error")
    }
  }

  return (
    loading || cards === [] ? <LoadingScreen /> : username !== "" && !set ? <SetButtonsShare username={username} setSet={setSet} /> :
    <div>
      <div style={{ textAlign: "center" }}>
      <h2>{setSymbols[set]} {username}'s {set} Collection {setSymbols[set]}</h2>
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
              <Card key={a[i].id} card={a[i + count]} canEdit={true} i={i} a={a} count={count} setCount={setCount} />) 
            : rarity !== "all" && cardType === "all" ? cards.filter(card => card.set === set && card.rarity === rarity).map((card, i, a) => 
              <Card key={a[i].id} card={a[i + count]} canEdit={true} i={i} a={a} count={count} setCount={setCount} />)
            : rarity === "all" && cardType !== "all" ? cards.filter(card => card.set === set && card.card_type === cardType).map((card, i, a) => 
              <Card key={a[i].id} card={a[i + count]} canEdit={true} i={i} a={a} count={count} setCount={setCount} />) 
            : cards.filter(card => card.set === set && card.rarity === rarity && card.card_type === cardType).length !== 0 ? 
              cards.filter(card => card.set === set && card.rarity === rarity && card.card_type === cardType).map((card, i, a) => 
              <Card key={a[i].id} card={a[i + count]} canEdit={true} i={i} a={a} count={count} setCount={setCount} />) 
            : <p>{`NO ${cardType.toUpperCase()} CARDS OF ${rarity.toUpperCase()} RARITY IN THIS SET!`}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default CollectionSharePage;