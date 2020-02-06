import React from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

const Errors = () => {
  const { code } = useParams();
  const { search } = useLocation();
  const { title } = queryString.parse(search);

  const renderError = () => {
    if (code === "404" && title) {
      return (
        <h2 style={{ textAlign: "center", paddingTop: "100px" }}>
          {`Sorry did not found such movie or tv-show with the given title: ${title}`}
        </h2>
      );
    }
  };
  return renderError();
};

export default Errors;
