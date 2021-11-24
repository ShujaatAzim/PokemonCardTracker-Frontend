import React from 'react';
import { Button } from 'semantic-ui-react';

const SetButtonsScreen = props => {
  
  const { setSet, username } = props;

  return(
    <div style={{ textAlign: "center" }}>
      <img src="https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png" alt="pokebook" border="0" />
      <h1>Viewing {username}'s Collection!</h1>
      <h4>Choose a set:</h4>
      <div>
        <Button id="set-button" color="blue" size="large" onClick={() => setSet("Base Set")}>Base Set</Button>
        <Button id="set-button" color="green" size="large" onClick={() => setSet("Jungle")}>Jungle</Button>
        <Button id="set-button" color="brown" size="large" onClick={() => setSet("Fossil")}>Fossil</Button>
        <Button id="set-button" color="blue" size="large" onClick={() => setSet("Base Set 2")}>Base Set 2</Button>
      </div>
      <div>
        <Button id="set-button" color="black" size="large" onClick={() => setSet("Team Rocket")}>Team Rocket</Button>
        <Button id="set-button" color="orange" size="large" onClick={() => setSet("Gym Heroes")}>Gym Heroes</Button>
        <Button id="set-button" color="yellow" size="large" onClick={() => setSet("Gym Challenge")}>Gym Challenge</Button>
      </div>
      <div>
        <Button id="set-button" color="violet" size="large" onClick={() => setSet("Neo Genesis")}>Neo Genesis</Button>
        <Button id="set-button" color="pink" size="large" onClick={() => setSet("Neo Discovery")}>Neo Discovery</Button>
        <Button id="set-button" color="purple" size="large" onClick={() => setSet("Neo Revelations")}>Neo Revelations</Button>
        <Button id="set-button" color="teal" size="large" onClick={() => setSet("Neo Destiny")}>Neo Destiny</Button>
      </div>
    </div>
  );
}

export default SetButtonsScreen;