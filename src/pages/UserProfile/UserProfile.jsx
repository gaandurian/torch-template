import React, { useState, useEffect } from "react";
import AddMemberForm from "../../components/AddMemberForm/AddMemberForm";
import { MainPageTitle } from "../../components/shared/Typography";
import StyledSegment from "../../components/shared/StyledSegment";
import { editMemberAccount, getOneMemberById } from "../Members/members-api";
import { useParams, Redirect } from "react-router-dom";
import { hasRightToEditProfile } from "../Auth/auth-utilities";

export default function UserProfile(props) {
  const [memberData, setMemberData] = useState();
  const [editLoading, setEditLoading] = useState(false);

  const _id = useParams().id;
  const getMemberAndUpdateState = () =>
    getOneMemberById(_id).then((m) => {
      setMemberData(m);
      console.log(m);
      setEditLoading(false);
    });

  const handleEditMemberAccount = (values) => {
    setEditLoading(true);
    editMemberAccount(values).then(() => getMemberAndUpdateState());
  };

  useEffect(() => {
    setEditLoading(true);
    getMemberAndUpdateState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return hasRightToEditProfile(_id) ? (
    <div>
      <MainPageTitle title="Edit profile" />
      <StyledSegment style={{ maxWidth: 450 }} loading={editLoading}>
        <AddMemberForm
          handleEditMemberAccount={handleEditMemberAccount}
          isEdit
          initialValues={memberData}
        />
      </StyledSegment>
    </div>
  ) : (
    <Redirect
      to={{ pathname: "/dashboard", state: { from: props.location } }}
    />
  );
}
