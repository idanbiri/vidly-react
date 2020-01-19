import React, { useState } from "react";
import { getAccessToken } from "../services/LocalStorageService";
import { parseJwt } from "../services/JwtService";

const UserInfoContext = React.createContext();

const checkInfo = () => {
  const token = getAccessToken();
  if (token) {
    const userInfo = parseJwt(token);
    return userInfo;
  } else {
    return {};
  }
};

export const UserInfoProvider = props => {
  const [userInfo, SetUserInfo] = useState(checkInfo);
  const onChangeUserInfo = info => {
    SetUserInfo(info);
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, onChangeUserInfo }}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContext;
