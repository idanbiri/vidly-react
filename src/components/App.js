import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import "../styles/App.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <HomePage />
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default App;
