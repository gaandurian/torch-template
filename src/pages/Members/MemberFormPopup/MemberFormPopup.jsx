import React from "react";
import { Popup } from "semantic-ui-react";
import AddMemberForm from "../../../components/AddMemberForm/AddMemberForm";

export default function MemberFormPopup({
  member,
  open,
  contextRef,
  handleEditMemberAccount,
  handleCreateNewMember,
  isEdit,
}) {
  return (
    <Popup
      style={{ minWidth: 450 }}
      flowing
      context={contextRef}
      content={
        <AddMemberForm
          handleEditMemberAccount={handleEditMemberAccount}
          handleCreateNewMember={handleCreateNewMember}
          initialValues={member}
          isEdit={isEdit}
        />
      }
      position="bottom right"
      open={open}
    />
  );
}
