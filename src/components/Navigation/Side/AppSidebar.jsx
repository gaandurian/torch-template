import React from "react";
import { Sidebar, Menu } from "semantic-ui-react";
import { Brand, UserInfo, Toolbar, MenuCreator } from "./appbar-atoms";
import "./app-sidebar.css";

const menu = [
  { to: "/dashboard", icon: "dashboard" },
  { to: "/tasks", icon: "coffee" },
  { to: "/members", icon: "group" },
];

export default function AppSidebar() {
  return (
    <Sidebar
      as={Menu}
      animation="slide along"
      icon="labeled"
      vertical
      visible
      width="thin"
      inverted
      className="app-sidebar"
    >
      <Brand />
      <UserInfo />
      <Toolbar />
      <MenuCreator menu={menu} />
    </Sidebar>
  );
}
