import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import { getCurrentUser } from "../../../../pages/Auth/auth-utilities";
import Identicon from "react-identicons";
import { getOneMemberById } from "../../../../pages/Members/members-api";

export const AppbarUserInfo = () => {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    getOneMemberById(getCurrentUser()._id).then(user => setUserInfo(user))
  }, [])
  const blockStyle = {
    width: "100%",
    textAlign: "left",
    padding: 14,
    display: "flex",
    flexDirection: "row",
  };
  const userPic = (
    <Identicon
      palette={["#0099a2", "tomato"]}
      size={30}
      bg="#3a2440"
      string={getCurrentUser().phone}
    />
  );

  return (
    <div style={blockStyle}>
      <Image
        children={userPic}
        style={{ paddingTop: 4 }}
        avatar
        rounded
        size="mini"
      />
      <div style={{ marginLeft: 8, fontWeight: 600, color: "#FFF" }}>
        {userInfo?.firstname}
        <span style={{ display: "block", fontSize: ".9rem", fontWeight: 400 }}>
          {userInfo?.department}
        </span>
      </div>
    </div>
  );
};

export default AppbarUserInfo;
