import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { setSymbols } from '../Data/Symbols';

const SetButtonsScreen = props => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"));
  
  const { set, setSet } = props;

  return(
    <div style={{ textAlign: "center" }}>
      <img src="https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png" className="logo" alt="pokebook" border="0" />
      <h1>Welcome, {creds.username}!</h1>
      <h4>Choose a set:</h4>
      <div>
      <Dropdown item text="Sets" selection>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSet("Base Set")} disabled={set === "Base Set"}>
            Base Set {setSymbols["Base Set"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Jungle")} disabled={set === "Jungle"}>
            Jungle {setSymbols["Jungle"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Fossil")} disabled={set === "Fossil"}>
            Fossil {setSymbols["Fossil"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Base Set 2")} disabled={set === "Base Set 2"}>
            Base Set 2 {setSymbols["Base Set 2"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Team Rocket")} disabled={set === "Team Rocket"}>
            Team Rocket {setSymbols["Team Rocket"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Gym Heroes")} disabled={set === "Gym Heroes"}>
            Gym Heroes {setSymbols["Gym Heroes"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Gym Challenge")} disabled={set === "Gym Challenge"}>
            Gym Challenge {setSymbols["Gym Challenge"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Genesis")} disabled={set === "Neo Genesis"}>
            Neo Genesis {setSymbols["Neo Genesis"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Discovery")} disabled={set === "Neo Discovery"}>
            Neo Discovery {setSymbols["Neo Discovery"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Revelations")} disabled={set === "Neo Revelations"}>
            Neo Revelations {setSymbols["Neo Revelations"]}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Destiny")} disabled={set === "Neo Destiny"}>
            Neo Destiny {setSymbols["Neo Destiny"]}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <br />
      <div style={{ listStylePosition: "inside" }}>
        How to use this app:
        <ol style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
          <li>Do</li>
          <li>Like</li>
          <li>This</li>
        </ol>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default SetButtonsScreen;