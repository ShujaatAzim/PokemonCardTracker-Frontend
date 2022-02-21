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
  const [filters, setFilters] = useState("none")

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
          <p>Filters:</p>
          <Button circular color="red" onClick={() => setFilters("none")} disabled={filters === "none"}>None</Button>
          <Button circular color="purple" onClick={() => setFilters("holo")} disabled={filters === "holo"}>Holos</Button>
          <Button circular color="blue" onClick={() => setFilters("rare")} disabled={filters === "rare"}>Rares</Button>
          <Button circular color="green" onClick={() => setFilters("uncommon")} disabled={filters === "uncommon"}>Uncommons</Button>
          <Button circular color="grey" onClick={() => setFilters("common")} disabled={filters === "common"}>Commons</Button>
        </div>
        <br />
        <div>
          { filters === "none" ? cards.filter(card => card.set === set).map(card => 
              <Card key={card.id} creds={creds} card={card} getCards={getCards} canEdit={true} />) 
            :
            cards.filter(card => card.set === set && card.rarity === filters).map(card => 
              <Card key={card.id} creds={creds} card={card} getCards={getCards} canEdit={true} />)
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;