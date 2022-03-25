import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import LoadingScreen from '../Components/LoadingScreen';
import Card from '../Components/Card';
import SetButtonsShare from '../Components/SetButtonsShare';
import url from '../urlHelper';

const CollectionSharePage = props => {
  
  const { set, setSet } = props;
  
  const location = useLocation()
  const userID = (location.pathname.split("/")[2])

  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [username, setUsername] = useState("");
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
    <div style={{ display: "flex" }}>
      <div style={{ textAlign: "center" }}>
      <h2>{set}</h2>
      <br />
        {cards.filter(card => card.set === set).map((card, i, a) => {
          return <Card key={a[i].id} card={a[i + count]} canEdit={false} i={i} a={a} count={count} setCount={setCount} />})}
      </div>
    </div>
  );
}

export default CollectionSharePage;