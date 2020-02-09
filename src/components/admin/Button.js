import React from "react";
import vidly from "../../apis/index";
import "../../styles/admin/Button.css";

const Button = ({ text, fetchTo, onVideosChange }) => {
  const onBtnClick = async () => {
    const { data } = await vidly.get(`/${fetchTo}`);
    onVideosChange(data, fetchTo);
  };
  return <button onClick={onBtnClick}>{text}</button>;
};

export default Button;
