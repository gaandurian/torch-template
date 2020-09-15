import React from "react";
import { Button, Icon } from "semantic-ui-react";

const toolbarStyle = {
  width: "100%",
  padding: 15,
  paddingBottom: 20,
  paddingTop: 10,
};

const AppbarToolbar = () => (
  <div style={toolbarStyle}>
    <Button.Group icon>
      <Button basic className="toolbar-button">
        <Icon name="font" />
      </Button>
      <Button basic className="toolbar-button">
        <Icon name="th list" />
      </Button>
      <Button basic className="toolbar-button">
        <Icon name="map" />
      </Button>
    </Button.Group>
  </div>
);

export default AppbarToolbar;
