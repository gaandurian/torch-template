import React, { useState, useEffect } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import StyledField from "../shared/StyledField";

export default function AddMemberForm({ handleCreateNewMember, handleEditMemberAccount, initialValues, isEdit }) {
  const [values, setValues] = useState( {...initialValues, password: ""} || {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    department: "",
    phone: "",
  });

  const handleChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Form onSubmit={() => isEdit ? handleEditMemberAccount(values) : handleCreateNewMember(values)}>
      <StyledField>
        <label>First Name</label>
        <input
          value={values.firstname}
          name="firstname"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
      </StyledField>
      <StyledField>
        <label>Last Name</label>
        <input
          value={values.lastname}
          name="lastname"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </StyledField>
      <StyledField>
        <label>Email</label>
        <input
          value={values.email}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </StyledField>
      <StyledField>
        <label>Phone</label>
        <input
          value={values.phone}
          name="phone"
          type="tel"
          placeholder="Phone"
          onChange={handleChange}
        />
      </StyledField>
      <StyledField>
        <label>Password</label>
        <input
          value={values.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </StyledField>
      <StyledField>
        <label>Department</label>
        <Select
          onChange={(event, result) => handleChange(event, result)}
          value={values.department}
          name="department"
          placeholder="Select dept."
          options={[
            { key: "Web dev.", value: "Web dev.", text: "Web dev." },
            { key: "Mobile dev.", value: "Mobile dev.", text: "Mobile dev." },
            { key: "Finance", value: "Finance", text: "Finance" },
            {
              key: "Executive Bureau",
              value: "Executive Bureau",
              text: "Executive Bureau",
            },
          ]}
        />
      </StyledField>

      <Button primary type="submit" fluid>
        Submit
      </Button>
    </Form>
  );
}
