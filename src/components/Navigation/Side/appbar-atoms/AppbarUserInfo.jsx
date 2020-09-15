import React from "react";
import { Image } from "semantic-ui-react";

export const AppbarUserInfo = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "left",
        padding: 14,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Image
        src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
        avatar
        size="mini"
      />
      <div style={{ marginLeft: 8, fontWeight: 600, color: "#FFF" }}>
        Mahmoud
        <span style={{ display: "block", fontSize: ".9rem", fontWeight: 400 }}>
          administrator
        </span>
      </div>
    </div>
  );
};

export default AppbarUserInfo;
