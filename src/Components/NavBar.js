import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'

const NavBar = props => {

  let history = useHistory();
  let location = useLocation();
  
  const { user, set, setUser, setSet } = props;

  const handleLogout = () => {
    localStorage.removeItem("trackerCreds")
    setUser(null)
    history.push('/')
  }

  return (
    user && user.logged === true ? 
    <Menu secondary>
      <Menu.Item header>
          <h3><b>PokéBook</b></h3>
      </Menu.Item>
      <Menu.Item name="Home" onClick={() => history.push("/")} disabled={location.pathname === "/"}/>
      <Menu.Item name="Profile" onClick={() => history.push("/profile")} disabled={location.pathname === "/profile"}/>
      <Dropdown item text="Sets" disabled={location.pathname === "/profile"}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSet("base")} disabled={set === "base"}>Base Set</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("jungle")} disabled={set === "jungle"}>Jungle</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("fossil")} disabled={set === "fossil"}>Fossil</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Menu.Item name="Logout" onClick={() => handleLogout()} />
      </Menu.Menu>
    </Menu>
    :
    <Menu secondary>
      <Menu.Item header>
          <h3><b>PokéBook</b></h3>
      </Menu.Item>
      <Menu.Item name="Login" onClick={() => history.push("/login")} disabled={location.pathname === "/login" || location.pathname === "/" } />
    </Menu>
  );
}

export default NavBar;