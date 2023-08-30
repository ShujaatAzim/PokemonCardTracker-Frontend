import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { setSymbols } from '../Data/Symbols';

const SetButtonsScreen = (props) => {
  const creds = JSON.parse(localStorage.getItem('trackerCreds'));

  const { set, setSet } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src='https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png'
        className='logo'
        alt='pokebook'
        border='0'
      />
      <h1>Welcome, {creds.username}!</h1>
      <h4>Choose a set:</h4>
      <div>
        <Dropdown item text='Sets' selection>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => setSet('Base Set')}
              disabled={set === 'Base Set'}
            >
              Base Set {setSymbols['Base Set']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Jungle')}
              disabled={set === 'Jungle'}
            >
              Jungle {setSymbols['Jungle']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Fossil')}
              disabled={set === 'Fossil'}
            >
              Fossil {setSymbols['Fossil']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Base Set 2')}
              disabled={set === 'Base Set 2'}
            >
              Base Set 2 {setSymbols['Base Set 2']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Team Rocket')}
              disabled={set === 'Team Rocket'}
            >
              Team Rocket {setSymbols['Team Rocket']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Gym Heroes')}
              disabled={set === 'Gym Heroes'}
            >
              Gym Heroes {setSymbols['Gym Heroes']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Gym Challenge')}
              disabled={set === 'Gym Challenge'}
            >
              Gym Challenge {setSymbols['Gym Challenge']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Neo Genesis')}
              disabled={set === 'Neo Genesis'}
            >
              Neo Genesis {setSymbols['Neo Genesis']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Neo Discovery')}
              disabled={set === 'Neo Discovery'}
            >
              Neo Discovery {setSymbols['Neo Discovery']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Neo Revelations')}
              disabled={set === 'Neo Revelations'}
            >
              Neo Revelations {setSymbols['Neo Revelations']}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSet('Neo Destiny')}
              disabled={set === 'Neo Destiny'}
            >
              Neo Destiny {setSymbols['Neo Destiny']}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <br />
    </div>
  );
};

export default SetButtonsScreen;
