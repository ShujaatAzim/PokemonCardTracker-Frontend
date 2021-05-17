import React from 'react';
import Card from '../Components/Card';
import { PokemonCards } from '../Data/PokemonCards';

const HomePage = () => {

  return (
    <div style={{width: "65%" }}>
      { PokemonCards.map(card => <Card key={card.image} card={card} /> )}
    </div>
  );
}

export default HomePage;