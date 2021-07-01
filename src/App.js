import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage';
import NavBar from './Components/NavBar';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("trackerCreds")))
  const [set, setSet] = useState("")

  return (
    <div className="app">
      <div className="header">
        <NavBar user={user} set={set} setUser={setUser} setSet={setSet} />
      </div>
      <div className="body">
        { user && user.logged === true ? 
        <Switch>
          <Route exact path="/" component={() => <HomePage set={set} setSet={setSet} />} />
          <Route exact path="/profile" component={ProfilePage}  />
          <Route exact path="/register" component={() => <RegistrationPage setUser={setUser} />} />
          <Route component={NotFoundPage} />
        </Switch>
        :
        <Switch>
          <Route exact path="/" component={() => <LoginPage setUser={setUser} />} />
          <Route exact path="/login" component={() => <LoginPage setUser={setUser} />} />
          <Route exact path="/register" component={() => <RegistrationPage setUser={setUser} />} />
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
