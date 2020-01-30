import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserStatusContext from "../contexts/UserStatus";

const TransactionBtn = () => {
  const { userStatus } = useContext(UserStatusContext);

  const renderButton = () => {
    if (userStatus) {
      return <Link to="/transactions">Transactions</Link>;
    }
    return null;
  };

  return renderButton();
};

export default TransactionBtn;
