import React from "react";
import { Icon } from "semantic-ui-react";

const brandStyle = {
  width: "80%",
  margin: "auto",
  backgroundColor: "tomato",
  borderRadius: 3,
  padding: 14,
  marginTop: 23,
  marginBottom: 23,
  color: "#fff",
  fontWeight: 900,
};

const Brand = () => (
  <div style={brandStyle}>
    <Icon name="fire" /> torch{" "}
  </div>
);

export default Brand;
