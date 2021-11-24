import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage';
import CollectionPage from './Pages/CollectionPage';
import CollectionSharePage from './Pages/CollectionSharePage';
import NavBar from './Components/NavBar';
import NavBarShare from './Components/NavBarShare';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("trackerCreds")))
  const [set, setSet] = useState("")

  const location = useLocation();

  return (
    <div className="app">
      <div className="header">
        { location.pathname.indexOf("collection") > - 1 ? 
          <NavBarShare set={set} setSet={setSet} /> :
          <NavBar user={user} set={set} setUser={setUser} setSet={setSet} />
        }
      </div>
      <div className="body">
        { user && user.logged === true ? 
        <Switch>
          <Route exact path="/" component={() => <HomePage set={set} setSet={setSet} />} />
          <Route exact path="/profile" component={ProfilePage}  />
          <Route exact path="/register" component={() => <RegistrationPage setUser={setUser} />} />
          <Route exact path="/:id" component={() => <CollectionPage set={set} setSet={setSet} />} />
          <Route exact path="/collection/:id" component={() => <CollectionSharePage set={set} setSet={setSet} />} />
          <Route component={NotFoundPage} />
        </Switch>
        :
        <Switch>
          <Route exact path="/" component={() => <LoginPage setUser={setUser} />} />
          <Route exact path="/login" component={() => <LoginPage setUser={setUser} />} />
          <Route exact path="/register" component={() => <RegistrationPage setUser={setUser} />} />
          <Route exact path="/:id" component={() => <CollectionPage set={set} setSet={setSet} />} />
          <Route exact path="/collection/:id" component={() => <CollectionSharePage set={set} setSet={setSet} />} />
          <Route component={NotFoundPage} />
        </Switch>
        }
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
