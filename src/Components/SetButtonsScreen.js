import React from 'react';
import { Button } from 'semantic-ui-react';

const SetButtonsScreen = props => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))
  
  const { setSet, setName } = props;

  return(
    <div style={{ textAlign: "center" }}>
      <img src="https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png" alt="pokebook" border="0" />
      <h1>Welcome, {creds.username}!</h1>
      <h4>Choose a set:</h4>
      <div>
        <Button id="set-button" color="blue" size="large" onClick={() => {setSet("base");setName("Base Set")}}>Base Set</Button>
        <Button id="set-button" color="green" size="large" onClick={() => {setSet("jungle");setName("Jungle Set")}}>Jungle</Button>
        <Button id="set-button" color="brown" size="large" onClick={() => {setSet("fossil");setName("Fossil Set")}}>Fossil</Button>
        <Button id="set-button" color="blue" size="large" onClick={() => {setSet("base2");setName("Base Set 2")}}>Base Set 2</Button>
      </div>
      <div>
        <Button id="set-button" color="black" size="large" onClick={() => {setSet("rocket");setName("Team Rocket Set")}}>Team Rocket</Button>
        <Button id="set-button" color="orange" size="large" onClick={() => {setSet("heroes");setName("Gym Heroes Set")}}>Gym Heroes</Button>
        <Button id="set-button" color="yellow" size="large" onClick={() => {setSet("challenge");setName("Gym Challenge Set")}}>Gym Challenge</Button>
      </div>
      <div>
        <Button id="set-button" color="violet" size="large" onClick={() => {setSet("genesis");setName("Neo Genesis Set")}}>Neo Genesis</Button>
        <Button id="set-button" color="pink" size="large" onClick={() => {setSet("discovery");setName("Neo Discovery Set")}}>Neo Discovery</Button>
        <Button id="set-button" color="purple" size="large" onClick={() => {setSet("revelations");setName("Neo Revelations Set")}}>Neo Revelations</Button>
        <Button id="set-button" color="teal" size="large" onClick={() => {setSet("destiny");setName("Neo Destiny Set")}}>Neo Destiny</Button>
      </div>
    </div>
  );
}

export default SetButtonsScreen;