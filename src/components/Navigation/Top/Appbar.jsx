import React from "react";
import { Menu, Dropdown, Icon, Input } from "semantic-ui-react";
import "./appbar.css";
const { Item, Divider, Header } = Dropdown;

export default function Appbar() {
  return (
    <Menu attached="top">
      

      <Menu.Menu position="right">
      <Item className="search-parent">
        <Input
          transparent
          className="search"
          icon="search"
          placeholder="Search..."
        />
      </Item>
        <Dropdown item icon="plus" simple direction="left">
          <Dropdown.Menu>
            <Item><Icon name="signup" />New task</Item>
            <Item><Icon name="add user" />New member</Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item icon="user" simple direction="left">
          <Dropdown.Menu>
            <Item><Icon name="user circle" />Profile</Item>
            <Item><Icon name="logout" />Logout</Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
