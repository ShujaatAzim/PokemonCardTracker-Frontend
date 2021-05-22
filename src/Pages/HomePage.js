import React from 'react';
import Card from '../Components/Card';

const HomePage = () => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))

  return (
    <div style={{ width: "65%" }}>
      {creds.cards.map(card => {
        return (
          <Card key={card.id} image={card.image} owned={card.owned} />
        )
      })}
    </div>
  );
}

export default HomePage;