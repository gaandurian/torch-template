import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./login.css"

export default function Login() {
  return (
    <Grid textAlign="center" verticalAlign="middle" className="login-main">
      <Grid.Column className="login-block">
        <Header
          as="h2"
          style={{ color: "#fff", paddingTop: 14, paddingBottom: 10 }}
          textAlign="center"
        >
          <Icon name="fire" /> Log-in to your account
        </Header>
        <LoginForm />
      </Grid.Column>
    </Grid>
  );
}
