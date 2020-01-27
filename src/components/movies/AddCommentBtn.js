import React, { useContext, useState } from "react";
import UserStatusContext from "../../contexts/UserStatus";
import AddCommentFormContext from "../../contexts/ShowAddCommentForm";
import "../../styles/AddCommentBtn.css";

const AddCommentBtn = () => {
  const { userStatus } = useContext(UserStatusContext);
  const { onChangeDisplayForm } = useContext(AddCommentFormContext);
  const renderAddcommentBtn = () => {
    if (userStatus) {
      return (
        <button onClick={onBtnClick} className="add-comment-btn">
          Add comment
        </button>
      );
    }
    return <button className="add-comment-btn">Add comment</button>;
  };

  const onBtnClick = () => {
    onChangeDisplayForm("block");
  };
  return <>{renderAddcommentBtn()}</>;
};

export default AddCommentBtn;
