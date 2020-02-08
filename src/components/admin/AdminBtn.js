import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserStatusContext from "../../contexts/UserStatus";
import UserInfoContext from "../../contexts/UserInfo";

const AdminBtn = () => {
  const { userStatus } = useContext(UserStatusContext);
  const { userInfo } = useContext(UserInfoContext);

  const renderBtn = () => {
    if (userStatus && userInfo.isAdmin) {
      return <Link to="/Admin">Admin</Link>;
    }
    return null;
  };
  return renderBtn();
};

export default AdminBtn;
