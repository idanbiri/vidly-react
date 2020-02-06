import React, { useContext } from "react";
import UserStatusContext from "../../contexts/UserStatus";
import AddCommentFormContext from "../../contexts/ShowAddCommentForm";
import "../../styles/movies/AddCommentBtn.css";

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
    return (
      <button className="add-comment-btn disabled" disabled>
        Add comment
      </button>
    );
  };

  const onBtnClick = () => {
    onChangeDisplayForm("block");
  };
  return <>{renderAddcommentBtn()}</>;
};

export default AddCommentBtn;
