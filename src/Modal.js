import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";

const Modal = () => {
  return ReactDOM.createPortal(<Login />, document.querySelector("#modal"));
};

export default Modal;
