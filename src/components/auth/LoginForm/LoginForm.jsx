import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import "./login-form.css";
import { loginAndStoreTokenInLocalStorage } from "../../../pages/Auth/auth-utilities";
import { useHistory } from "react-router-dom";
const LoginForm = () => {
  const [loginButtonLoading, setLoginButtonLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = () => {
    setLoginButtonLoading(true);
    loginAndStoreTokenInLocalStorage(values).then((response) => {
      if (response?.status === 200) history.push("/dashboard");
      setLoginButtonLoading(false);
    });
  };
  return (
    <Form size="large" onSubmit={handleLogin}>
      <Segment basic>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          onChange={handleChange}
          name="email"
        />
        <Form.Input
          name="password"
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <Button
          loading={loginButtonLoading}
          style={{ backgroundColor: "tomato", color: "#fff" }}
          fluid
          size="large"
          type="submit"
        >
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default LoginForm;
