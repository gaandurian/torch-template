import React from "react";
import { Button } from "semantic-ui-react";

const toolbarStyle = {
  width: "100%",
  padding: 15,
  paddingBottom: 20,
  paddingTop: 10,
};

const AppbarToolbar = () => (
  <div style={toolbarStyle}>
    <Button.Group icon>
      <Button icon="font" basic className="toolbar-button" />
      <Button icon="th list" basic className="toolbar-button" />
      <Button icon="map" basic className="toolbar-button" />
    </Button.Group>
  </div>
);

export default AppbarToolbar;
