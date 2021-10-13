import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../Components/LoadingScreen';
import SetButtonsScreen from '../Components/SetButtonsScreen';
import Card from '../Components/Card';
import url from "../urlHelper";

const CollectionPage = props => {

  const { id } = useParams();
  const { set, setSet } = props;

  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCollection()
    // eslint-disable-next-line
  }, [])

  const getCollection = () => {
    fetch(`${url}/${id}`)
    .then(resp => resp.json())
    .then(data => setCards(data))
    .then(() => setTimeout(() => setLoading(false), 100))
  }

  return (
    loading ? <LoadingScreen /> : set === "" ? <SetButtonsScreen setSet={setSet} /> :
      <div style={{ display: "flex" }}>
        <div style={{ width: "65%" }}>
          {cards.filter(card => card.set === set).map(card => <Card key={card.id} card={card} unclickable={true} />)}
        </div>
      </div>
  );
}

export default CollectionPage;