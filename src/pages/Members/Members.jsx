import React, { useState, useEffect } from "react";
import StyledSegment from "../../components/shared/StyledSegment/StyledSegment";
import {
  getAllMembers,
  toggleMemberAccount,
  createNewMember,
  deleteMemberAccount,
  editMemberAccount
} from "./members-api";
import { Grid } from "semantic-ui-react";
import AddMemberForm from "../../components/AddMemberForm/AddMemberForm";
import { MainPageTitle } from "../../components/shared/Typography";
import MembersList from "./MembersList/MembersList";
const { Column, Row } = Grid;

export default function Members() {
  const [members, setMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);

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

    const handleEditMemberAccount = async values => 
      editMemberAccount(values).then(() => handleGetAllMembers())

  useEffect(() => handleGetAllMembers(), []);

  return (
    <div>
      <MainPageTitle title="Manage Members" />
      <Grid columns={2}>
        <Row>
          <Column width={10}>
            <StyledSegment style={{ all: "unset" }} loading={loadingMembers}>
              <MembersList
                members={members}
                handleToggleMemberAccount={handleToggleMemberAccount}
                handleDeleteMemberAccount={handleDeleteMemberAccount}
                handleEditMemberAccount={handleEditMemberAccount}
              />
            </StyledSegment>
          </Column>
          <Column width={6}>
            <StyledSegment title="Add member" padded>
              <AddMemberForm handleCreateNewMember={handleCreateNewMember} />
            </StyledSegment>
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
