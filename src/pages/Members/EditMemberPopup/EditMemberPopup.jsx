import React from "react";
import { Popup } from "semantic-ui-react";
import AddMemberForm from "../../../components/AddMemberForm/AddMemberForm";

export default function EditMemberPopup({ member, open, contextRef, handleEditMemberAccount }) {
  return (
    <Popup
    style={{minWidth: 450}}
    flowing
      context={contextRef}
      content={<AddMemberForm handleEditMemberAccount={handleEditMemberAccount} initialValues={member} isEdit />}
      position="bottom center"
      open={open}
    />
  );
}
