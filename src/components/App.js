import React from "react";
import Header from "./Header";
import Login from "./Login";
import "../styles/App.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Login />
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default App;
