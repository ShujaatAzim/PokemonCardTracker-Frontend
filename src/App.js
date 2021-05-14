import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';

const App = () => {
  return (
    <div className="app">
      <div className="header">

      </div>
      <div className="body">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage}  />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
