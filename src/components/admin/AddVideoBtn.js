import React from "react";

const AddVideoBtn = ({ onDisplayFormChange }) => {
  const onButtonClick = () => {
    onDisplayFormChange();
  };

  return <button onClick={onButtonClick}>Add</button>;
};

export default AddVideoBtn;
