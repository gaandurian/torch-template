import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { isAdmin } from "../../../../pages/Auth/auth-utilities";

const MenuCreator = ({ menu }) => 
  isAdmin() ? menu.map((item) => 
    <Menu.Item
      key={item.to}
      as={NavLink}
      activeClassName="active-link"
      to={item.to}
      icon={item.icon}
    >
      {item.label}
    </Menu.Item> 
  ) : menu.map(item => !item.admin && <Menu.Item
    key={item.to}
    as={NavLink}
    activeClassName="active-link"
    to={item.to}
    icon={item.icon}
  >
    {item.label}
  </Menu.Item> )

export default MenuCreator;
