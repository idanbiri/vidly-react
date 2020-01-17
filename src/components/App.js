import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Modal from "../Modal";
import history from "../history";
import "../styles/App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Router history={history}>
        <div className="header">
          <Header />
        </div>
        <Switch>
          <Route path="/login" exact>
            <div className="main">
              <Modal />
            </div>
          </Route>
          <div className="footer">footer</div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
