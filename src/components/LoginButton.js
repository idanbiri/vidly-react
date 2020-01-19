import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { clearAccessToken } from "../services/LocalStorageService";
import UserStatusContext from "../contexts/UserStatus";
import UserInfoContext from "../contexts/UserInfo";

const LoginButton = () => {
  const { userStatus, onChangeUserStatus } = useContext(UserStatusContext);
  const { onChangeUserInfo } = useContext(UserInfoContext);

  const renderButton = () => {
    if (userStatus) {
      return <button onClick={onLogoutButtonClick}>Logout</button>;
    }
    return (
      <>
        <Link to="/login" className="login-button">
          <button>Login</button>
        </Link>
      </>
    );
  };

  const onLogoutButtonClick = () => {
    clearAccessToken();
    onChangeUserStatus(false);
    onChangeUserInfo({});
  };

  return renderButton();
};

export default LoginButton;
