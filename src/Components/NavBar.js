import React from 'react'
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'

const NavBar = () => {

  let history = useHistory();

  return (
    <Menu secondary>
      <Menu.Item>
        <Menu.Header>
          <b>Pokemon Card Tracker!</b>
        </Menu.Header>
      </Menu.Item>
      <Menu.Item name="Home" onClick={() => history.push("/")} />
      <Menu.Item name="Profile" onClick={() => history.push("/profile")} />
      <Dropdown item text="Sets">
        <Dropdown.Menu>
          <Dropdown.Item>Base Set</Dropdown.Item>
          <Dropdown.Item>Jungle</Dropdown.Item>
          <Dropdown.Item>Fossil</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Menu.Item name="Logout" />
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;