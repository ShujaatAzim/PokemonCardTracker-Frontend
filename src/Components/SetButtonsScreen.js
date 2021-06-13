import React from 'react';
import { Button } from 'semantic-ui-react';

const SetButtonsScreen = props => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))
  
  const { setSet } = props;

  return(
    <div style={{ textAlign: "center" }}>
      <img src="https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png" alt="pokebook" border="0" />
      <h1>Welcome, {creds.username}!</h1>
      <h4>Choose a set:</h4>
      <div>
        <Button id="set-button" color="blue" size="large" onClick={() => setSet("base")}>Base Set</Button>
        <Button id="set-button" color="green" size="large" onClick={() => setSet("jungle")}>Jungle</Button>
        <Button id="set-button" color="brown" size="large" onClick={() => setSet("fossil")}>Fossil</Button>
      </div>
      <div>
        <Button id="set-button" color="black" size="large" onClick={() => setSet("rocket")}>Team Rocket</Button>
        <Button id="set-button" color="orange" size="large" onClick={() => setSet("heroes")}>Gym Heroes</Button>
        <Button id="set-button" color="yellow" size="large" onClick={() => setSet("challenge")}>Gym Challenge</Button>
      </div>
      <div>
        <Button id="set-button" color="violet" size="large" onClick={() => setSet("genesis")}>Neo Genesis</Button>
        <Button id="set-button" color="pink" size="large" onClick={() => setSet("discovery")}>Neo Discovery</Button>
        <Button id="set-button" color="purple" size="large" onClick={() => setSet("revelations")}>Neo Revelations</Button>
        <Button id="set-button" color="teal" size="large" onClick={() => setSet("destiny")}>Neo Destiny</Button>
      </div>
    </div>
  );
}

export default SetButtonsScreen;