import React from 'react';
import Card from '../Components/Card';

const HomePage = () => {

  let cardNumbers = [...Array(17).keys()]
  cardNumbers.shift()

  return (
    <div style={{width: "65%" }}>
      { cardNumbers.map(number => <Card key={number} number={number} /> )}
    </div>
  );
}

export default HomePage;