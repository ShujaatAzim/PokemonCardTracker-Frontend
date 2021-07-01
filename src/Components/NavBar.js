import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'

const NavBar = props => {

  let history = useHistory();
  let location = useLocation();
  
  const { user, set, setUser, setSet } = props;

  const handleLogout = () => {
    localStorage.removeItem("trackerCreds")
    setSet("")
    setUser(null)
    history.push('/')
  }

  return (
    user && user.logged === true ? 
    <Menu secondary>
      <Menu.Item header onClick={() => {setSet("");history.push("/")}}>
        <img src="https://fontmeme.com/permalink/210611/1437c0f4f84aa2f68907080980c55ada.png" alt="pokemon-font" border="0" />
      </Menu.Item>
      <Menu.Item name="Home" onClick={() => history.push("/")} disabled={location.pathname === "/"}/>
      <Menu.Item name="Profile" onClick={() => history.push("/profile")} disabled={location.pathname === "/profile"}/>
      <Dropdown item text="Sets" disabled={location.pathname === "/profile"}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSet("Base Set")} disabled={set === "Base Set"}>Base Set</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Jungle")} disabled={set === "Jungle"}>Jungle</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Fossil")} disabled={set === "Fossil"}>Fossil</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Base Set 2")} disabled={set === "Base Set 2"}>Base Set 2</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Team Rocket")} disabled={set === "Team Rocket"}>Team Rocket</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Gym Heroes")} disabled={set === "Gym Heroes"}>Gym Heroes</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Gym Challenge")} disabled={set === "Gym Challenge"}>Gym Challenge</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Genesis")} disabled={set === "Neo Genesis"}>Neo Genesis</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Discovery")} disabled={set === "Neo Discovery"}>Neo Discovery</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Revelations")} disabled={set === "Neo Revelations"}>Neo Revelations</Dropdown.Item>
          <Dropdown.Item onClick={() => setSet("Neo Destiny")} disabled={set === "Neo Destiny"}>Neo Destiny</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Menu.Item name="Logout" onClick={() => handleLogout()} />
      </Menu.Menu>
    </Menu>
    :
    <Menu secondary>
      <Menu.Item header>
        <img src="https://fontmeme.com/permalink/210611/1437c0f4f84aa2f68907080980c55ada.png" alt="pokemon-font" border="0" />
      </Menu.Item>
      <Menu.Item name="Login" onClick={() => history.push("/login")} disabled={location.pathname === "/login" || location.pathname === "/" } />
    </Menu>
  );
}

export default NavBar;