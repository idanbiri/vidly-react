import React, { useState } from "react";
import { getAccessToken } from "../services/LocalStorageService";

const UserStatusContext = React.createContext();

const checkStatus = () => {
  const token = getAccessToken();
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const UserStatusProvider = props => {
  const [userStatus, SetUserStatus] = useState(checkStatus());

  const onChangeUserStatus = status => {
    SetUserStatus(status);
  };

  return (
    <UserStatusContext.Provider value={{ userStatus, onChangeUserStatus }}>
      {props.children}
    </UserStatusContext.Provider>
  );
};

export default UserStatusContext;
