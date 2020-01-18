import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import Movies from "./Movies";
import history from "../history";
import { UserStatusProvider } from "../contexts/UserStatus";

import "../styles/App.css";

const App = () => {
  return (
    <div className="wrapper">
      <UserStatusProvider>
        <Router history={history}>
          <div className="header">
            <Header />
          </div>
          <div className="main">
            <Switch>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/movies" exact>
                <Movies />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserStatusProvider>
    </div>
  );
};

export default App;
