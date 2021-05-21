import React from 'react';
import Card from '../Components/Card';

const HomePage = () => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))

  return (
    <div style={{ width: "65%" }}>
      {creds.cards.map(card => <Card key={card.id} card={card} />)}
    </div>
  );
}

export default HomePage;