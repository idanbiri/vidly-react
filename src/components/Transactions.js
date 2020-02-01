import React, { useState, useEffect } from "react";
import TransactionItem from "./TransactionItem";
import vidly from "../apis/index";
import "../styles/Transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const transactions = await vidly.get("/transactions/me");
    setTransactions(transactions.data);
  };

  const renderTransactions = () => {
    return transactions.map(trans => {
      return <TransactionItem transaction={trans} key={trans._id} />;
    });
  };

  return <div className="transactions-container">{renderTransactions()}</div>;
};

export default Transactions;
