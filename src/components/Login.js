import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import vidly from "../apis/index";
import { setAccessToken } from "../services/LocalStorageService";
import { parseJwt } from "../services/JwtService";
import UserStatusContext from "../contexts/UserStatus";
import UserInfoContext from "../contexts/UserInfo";
import history from "../history";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onChangeUserStatus } = useContext(UserStatusContext);
  const { onChangeUserInfo } = useContext(UserInfoContext);

  const onFormSubmit = async e => {
    e.preventDefault();
    const loginObj = {
      email,
      password
    };
    const { data: accToken } = await vidly.post("/auth", loginObj);
    try {
      if (accToken) {
        setAccessToken(accToken);
        onChangeUserStatus(true);
        const userInfo = parseJwt(accToken);
        onChangeUserInfo(userInfo);
        history.push("/");
      }
    } catch (ex) {
      throw new Error(ex);
    }
  };

  return (
    <form className="login-form" onSubmit={onFormSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        required
        onChange={e => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        required
        onChange={e => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <input type="submit" placeholder="Email" />
      <Link to="/sign-up">Sign-up</Link>
    </form>
  );
};

export default Login;
