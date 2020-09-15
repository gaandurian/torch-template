import React from "react";
import { Form } from "semantic-ui-react";

export default function StyledField({ children, ...props }) {
  return <Form.Field {...props}>{children}</Form.Field>;
}
