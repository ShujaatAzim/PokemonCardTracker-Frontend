import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../Components/LoadingScreen';
import Card from '../Components/Card';
import url from "../urlHelper";

const CollectionPage = () => {

  const { id } = useParams();

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
    // need dedicated options here for navbar
    // also need some conditionals based on logged in status
    // new screens alone or same template? dropdowns for set?
    loading ? <LoadingScreen /> : 
      <div style={{ display: "flex" }}>
        <div style={{ width: "65%" }}>
          {cards.filter(card => card.set === set).map(card => <Card key={card.id} card={card} unclickable={true} />)}
        </div>
      </div>
  );
}

export default CollectionPage;