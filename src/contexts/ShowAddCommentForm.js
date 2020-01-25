import React, { useState } from "react";

const AddCommentFormContext = React.createContext();

export const AddCommentFormProvider = props => {
  const [displayForm, setDispalyForm] = useState("none");

  const onChangeDisplayForm = display => {
    setDispalyForm(display);
  };

  return (
    <AddCommentFormContext.Provider
      value={{ displayForm, onChangeDisplayForm }}
    >
      {props.children}
    </AddCommentFormContext.Provider>
  );
};

export default AddCommentFormContext;
