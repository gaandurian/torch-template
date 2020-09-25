import React, { useState, useRef, useEffect } from "react";
import { Table, Button, Header, Image } from "semantic-ui-react";
import StyledCheckbox from "../../../components/shared/StyledCheckbox";
import Identicon from "react-identicons";
import MemberFormPopup from "../MemberFormPopup";

const { Cell } = Table;
const headCells = ["Name", "E-mail", "Phone", "Action"];

export default function MembersList({
  members,
  handleToggleMemberAccount,
  handleDeleteMemberAccount,
  handleEditMemberAccount
}) {
  const contextRef = useRef([]);
  useEffect(() => {
    contextRef.current = new Array(members.length);
    setMemberToEdit(undefined)
    // eslint-disable-next-line
  }, [members, contextRef]);

  const [memberToEdit, setMemberToEdit] = useState(undefined);

  const handleToggleEditMember = (member) => {
    if (
      memberToEdit !== undefined &&
      contextRef.current[memberToEdit?._id] !== contextRef.current[member._id]
    ) {
      setMemberToEdit(member);
    } else if (memberToEdit === undefined) {
      setMemberToEdit(member);
    } else {
      setMemberToEdit(undefined);
    }
  };

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            {headCells.map((cell) => (
              <Table.HeaderCell key={cell}>{cell}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {members?.map((member) => {
            return (
              <Table.Row key={member._id}>
                <Cell collapsing>
                  <StyledCheckbox
                    toggle
                    checked={member.accountState}
                    onChange={() => handleToggleMemberAccount(member._id)}
                  />
                </Cell>
                <Cell>
                  <Header as="h5" image>
                    <Image
                      children={
                        <Identicon
                          palette={["#0099a2", "tomato"]}
                          size={27}
                          bg="#614a67"
                          string={member.phone}
                        />
                      }
                      rounded
                      size="mini"
                    ></Image>
                    <Header.Content>
                      {`${member.firstname} ${member.lastname}`}
                      <Header.Subheader>{member.department}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Cell>

                <Cell>{member.email}</Cell>
                <Cell>{member.phone}</Cell>
                <Cell collapsing>
                  <span
                    key={member.phone}
                    ref={(el) => (contextRef.current[member._id] = el)}
                  >
                    <Button
                      icon="pencil alternate"
                      onClick={() => handleToggleEditMember(member)}
                    />
                  </span>
                  <Button
                    icon="trash"
                    negative
                    onClick={() => handleDeleteMemberAccount(member._id)}
                  />
                  <MemberFormPopup
                    isEdit
                    handleEditMemberAccount={handleEditMemberAccount}
                    member={member}
                    open={memberToEdit?._id === member._id}
                    contextRef={contextRef.current[memberToEdit?._id]}
                  />
                </Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
