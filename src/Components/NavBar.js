import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'

const NavBar = props => {

  let history = useHistory();
  let location = useLocation();
  
  const { user, set, setUser, setSet, setName } = props;

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
          <Dropdown.Item onClick={() => {setSet("base");setName("Base Set")}} disabled={set === "base"}>Base Set</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("jungle");setName("Jungle Set")}} disabled={set === "jungle"}>Jungle</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("fossil");setName("Fossil Set")}} disabled={set === "fossil"}>Fossil</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("base2");setName("Base Set 2")}} disabled={set === "base2"}>Base Set 2</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("rocket");setName("Team Rocket Set")}} disabled={set === "rocket"}>Team Rocket</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("heroes");setName("Gym Heroes Set")}} disabled={set === "heroes"}>Gym Heroes</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("challenge");setName("Gym Challenge Set")}} disabled={set === "challenge"}>Gym Challenge</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("genesis");setName("Neo Genesis Set")}} disabled={set === "genesis"}>Neo Genesis</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("discovery");setName("Neo Discovery Set")}} disabled={set === "discovery"}>Neo Discovery</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("revelations");setName("Neo Revelations Set")}} disabled={set === "revelations"}>Neo Revelations</Dropdown.Item>
          <Dropdown.Item onClick={() => {setSet("destiny");setName("Neo Destiny Set")}} disabled={set === "destiny"}>Neo Destiny</Dropdown.Item>
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