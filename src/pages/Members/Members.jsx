import React, { useState, useEffect, useRef } from "react";
import StyledSegment from "../../components/shared/StyledSegment/StyledSegment";
import {
  getAllMembers,
  toggleMemberAccount,
  createNewMember,
  deleteMemberAccount,
  editMemberAccount,
} from "./members-api";
import { MainPageTitle } from "../../components/shared/Typography";
import MembersList from "./MembersList/MembersList";
import MemberFormPopup from "./MemberFormPopup";
import { Button, Icon } from "semantic-ui-react";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [memberPopupOpen, setMemberPopupOpen] = useState(false);

  const addMemberButtonRef = useRef();

  const handleToggleMemberPopup = () => setMemberPopupOpen(!memberPopupOpen);
  const handleGetAllMembers = () => {
    setLoadingMembers(true);
    getAllMembers().then((data) => {
      setMembers(data);
      setLoadingMembers(false);
    });
  };

  const handleDeleteMemberAccount = (_id) =>
    deleteMemberAccount(_id).then(() => handleGetAllMembers());

  const handleCreateNewMember = (values) =>
    createNewMember(values).then(() => handleGetAllMembers());

  const handleToggleMemberAccount = async (_id) =>
    toggleMemberAccount(_id).then(() => handleGetAllMembers());

  const handleEditMemberAccount = async (values) =>
    editMemberAccount(values).then(() => handleGetAllMembers());

  useEffect(() => handleGetAllMembers(), []);

  return (
    <div>
      <MainPageTitle title="Manage Members" />
      <div ref={addMemberButtonRef} style={{ float: 'right'}}>
        <Button primary onClick={handleToggleMemberPopup}>
          <Icon name="plus" />
          New Member
        </Button>
      </div>

      <StyledSegment style={{ all: "unset" }} loading={loadingMembers}>
        <MembersList
          members={members}
          handleToggleMemberAccount={handleToggleMemberAccount}
          handleDeleteMemberAccount={handleDeleteMemberAccount}
          handleEditMemberAccount={handleEditMemberAccount}
        />
      </StyledSegment>

      <MemberFormPopup
        handleCreateNewMember={handleCreateNewMember}
        contextRef={addMemberButtonRef}
        open={memberPopupOpen}
      />
    </div>
  );
}
