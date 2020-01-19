import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";
import history from "../history";
import { UserStatusProvider } from "../contexts/UserStatus";
import { UserInfoProvider } from "../contexts/UserInfo";

import "../styles/App.css";

const App = () => {
  return (
    <div className="wrapper">
      <UserInfoProvider>
        <UserStatusProvider>
          <Router history={history}>
            <div className="header">
              <Header />
            </div>
            <div className="main">
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movie/:movieId" exact component={MovieDetail} />
              </Switch>
            </div>
          </Router>
        </UserStatusProvider>
      </UserInfoProvider>
    </div>
  );
};

export default App;
