import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import LoadingScreen from '../Components/LoadingScreen';
import ShowCard from '../Components/ShowCard';
import url from "../urlHelper";

// need to copy the regular one, essentially, but make it static.
// also needs its own nav bar when not logged in.

const CollectionSharePage = props => {
  
  const { set, setSet } = props;
  
  const location = useLocation()
  const userID = (location.pathname.split("/")[2])

  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCollection()
    setSet("Base Set")
    // eslint-disable-next-line
  }, [])

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
    loading || cards === [] ? <LoadingScreen /> : 
    <div style={{ display: "flex" }}>
      <div style={{ width: "65%" }}>
        {cards.filter(card => card.set === set).map(card => <ShowCard key={card.id} card={card} unclickable={true} />)}
      </div>
    </div>
  );
}

export default CollectionSharePage;