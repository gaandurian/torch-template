import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const MenuCreator = ({ menu }) =>
  menu.map((item) => (
    <Menu.Item
      key={item.to}
      as={NavLink}
      activeClassName="active-link"
      to={item.to}
      icon={item.icon}
    >
      {item.label}
    </Menu.Item>
  ));

export default MenuCreator;
