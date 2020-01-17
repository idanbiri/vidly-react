import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <form className="login-form">
      <h1>Login</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="submit" placeholder="Email" />
    </form>
  );
};

export default Login;
