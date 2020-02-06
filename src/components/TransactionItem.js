import React from "react";

const TransactionItem = ({ transaction }) => {
  const checkTransaction = () => {
    if (!transaction.movie) {
      return (
        <iframe
          width="400px"
          height="400px"
          title="video player"
          src={`https://www.youtube.com/embed/${transaction.tvshow.videoUrl}`}
        ></iframe>
      );
    }
    return (
      <iframe
        width="400px"
        height="400px"
        title="vide player"
        src={`https://www.youtube.com/embed/${transaction.movie.videoUrl}`}
      ></iframe>
    );
  };
  return <>{checkTransaction()}</>;
};

export default TransactionItem;
