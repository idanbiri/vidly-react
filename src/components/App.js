import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import Movies from "./movies/Movies";
import MovieDetail from "./movies/MovieDetail";
import HomePage from "./HomePage";
import history from "../history";
import { UserStatusProvider } from "../contexts/UserStatus";
import { UserInfoProvider } from "../contexts/UserInfo";
import { AddCommentFormProvider } from "../contexts/ShowAddCommentForm";

import "../styles/App.css";

const App = () => {
  return (
    <div className="wrapper">
      <AddCommentFormProvider>
        <UserInfoProvider>
          <UserStatusProvider>
            <Router history={history}>
              <div className="header">
                <Header />
              </div>
              <div className="main">
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/movies" exact component={Movies} />
                  <Route path="/movie/:movieId" exact component={MovieDetail} />
                </Switch>
              </div>
            </Router>
          </UserStatusProvider>
        </UserInfoProvider>
      </AddCommentFormProvider>
    </div>
  );
};

export default App;
