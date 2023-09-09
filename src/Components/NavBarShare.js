import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import { setSymbols } from '../Data/Symbols';

const NavBarShare = (props) => {
  let history = useHistory();

  const { set, setSet } = props;

  return (
    <Menu secondary>
      <Menu.Item
        header
        onClick={() => {
          setSet('');
          history.push('/');
        }}
      >
        <img
          src='https://fontmeme.com/permalink/210611/1437c0f4f84aa2f68907080980c55ada.png'
          alt='pokemon-font'
          border='0'
        />
      </Menu.Item>
      <Dropdown item text='Sets'>
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
    </Menu>
  );
};

export default NavBarShare;
