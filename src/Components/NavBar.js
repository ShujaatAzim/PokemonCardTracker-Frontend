import React from 'react'
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'

const NavBar = props => {

  let history = useHistory();
  
  const { user, setUser, setSet } = props;

  const handleLogout = () => {
    localStorage.removeItem("trackerCreds")
    setUser(null)
    history.push('/')
  }

  return (
    user && user.logged === true ? 
    <Menu secondary>
      <Menu.Item header>
          <h3><b>Pokemon Card Tracker!</b></h3>
      </Menu.Item>
      <Menu.Item name="Home" onClick={() => history.push("/")} />
      <Menu.Item name="Profile" onClick={() => history.push("/profile")} />
      <Dropdown item text="Sets">
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSet("base")}>Base Set</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("jungle")}>Jungle</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("fossil")}>Fossil</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Menu.Item name="Logout" onClick={() => handleLogout()} />
      </Menu.Menu>
    </Menu>
    :
    <Menu secondary>
      <Menu.Item header>
          <h3><b>Pokemon Card Tracker!</b></h3>
      </Menu.Item>
      <Menu.Item name="Login" onClick={() => history.push("/login")} />
    </Menu>
  );
}

export default NavBar;