import React from "react";
import { Container } from "semantic-ui-react";
import AppSidebar from "../Navigation/Side/AppSidebar";
import Appbar from "../Navigation/Top/Appbar";
import './layout.css'

function Layout({ children }) {
  return (
    <>
      <AppSidebar className="sidebar" />
      <div className="content-wrapper" >
        <Appbar />
        <Container fluid className="container">
          {children}
          </Container>
      </div>
    </>
  );
}

export default Layout;
