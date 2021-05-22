import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const HomePage = props => {

  const [cards, setCards] = useState(null)
  const creds = JSON.parse(localStorage.getItem("trackerCreds"))

  // useEffect(() => {
  //   getCards()
  //   // eslint-disable-next-line
  // }, [])

  // const getCards = () => {
  //   fetch('http://localhost:3000/cards', {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${creds.jwt}`
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(data => setCards(data))
  // }
  return (
    <div style={{ width: "65%" }}>
      {creds.cards.map(card => {
        return (
          <Card card={card} />
        )
      })}
    </div>
  );
}

export default HomePage;