import React from "react";
import { Menu, Dropdown, Icon, Input } from "semantic-ui-react";
import "./appbar.css";
import { logout, isAdmin, getCurrentUser } from "../../../pages/Auth/auth-utilities";
import { useHistory, NavLink } from "react-router-dom";
const { Item } = Dropdown;

export default function Appbar() {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/login");
  };
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
        {isAdmin() && <Dropdown item icon="plus" simple direction="left">
          <Dropdown.Menu>
            <Item>
              <Icon name="signup" />
              New task
            </Item>
            <Item>
              <Icon name="add user" />
              New member
            </Item>
          </Dropdown.Menu>
        </Dropdown>}
        <Dropdown item icon="user" simple direction="left">
          <Dropdown.Menu>
            <Item as={NavLink} to={`/profile/${getCurrentUser()._id}`}>
              <Icon name="user circle" />
              Profile
            </Item>
            <Item onClick={handleLogout}>
              <Icon name="sign out" />
              Logout
            </Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
