import React from "react";
import AppSidebar from "./Side/AppSidebar";
import Appbar from "./Top/Appbar";
import './navigation.css'

function Navigation() {
  return (
    <>
      <AppSidebar className="sidebar" />
      <div className="content-wrapper" >
        <Appbar />
      </div>
    </>
  );
}

export default Navigation;
