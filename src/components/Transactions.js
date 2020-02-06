import React, { useState, useEffect, useContext } from "react";
import TransactionItem from "./TransactionItem";
import UserStatusContext from "../contexts/UserStatus";
import vidly from "../apis/index";
import "../styles/Transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { userStatus } = useContext(UserStatusContext);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const transactions = await vidly.get("/transactions/me");
      setTransactions(transactions.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  const renderTransactions = () => {
    return transactions.map(trans => {
      return <TransactionItem transaction={trans} key={trans._id} />;
    });
  };

  const renderPage = () => {
    if (userStatus) {
      return (
        <div className="transactions-container">{renderTransactions()}</div>
      );
    }
    return (
      <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
        You must be logged-in to see transactions
      </h1>
    );
  };
  return renderPage();
};

export default Transactions;
