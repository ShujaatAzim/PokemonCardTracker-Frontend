import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const HomePage = () => {

  const [cards, setCards] = useState(null)
  const [loading, setLoading] = useState(true)
  const creds = JSON.parse(localStorage.getItem("trackerCreds"))

  useEffect(() => {
    getCards()
    // eslint-disable-next-line
  }, [])

  const getCards = () => {
    fetch('http://localhost:3000/cards', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${creds.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <div style={{ width: "65%" }}>
      {loading ? "Fetching cards..." : "Got cards!" }
    </div>
  );
}

export default HomePage;