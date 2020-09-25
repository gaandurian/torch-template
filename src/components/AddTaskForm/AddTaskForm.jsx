import React, { useState, useEffect } from "react";
import { Form, Button, Select, TextArea, Image } from "semantic-ui-react";
import StyledField from "../shared/StyledField";
import { getAllMembers } from "../../pages/Members/members-api";
import Identicon from "react-identicons";

export default function AddTaskForm({
  handleCreateNewTask,
  handleEditTask,
  initialValues,
  isEdit,
}) {
  const [values, setValues] = useState(
    initialValues || {
      title: "",
      description: "",
      label: "",
      state: "",
      member_id: ""
    }
  );
  const [members, setMembers] = useState([]);
  const [selectIsLoading, setSelectIsLoading] = useState(false);

  const mapObjectToSelectValues = (data) => {
    return data.map((member) => ({
      key: member._id,
      value: member._id,
      text: `${member.firstname} ${member.lastname}`,
      image: {
        avatar: true,
        children: (
          <Image rounded>
            <Identicon
              palette={["#0099a2", "tomato"]}
              size={27}
              bg="#614a67"
              string={member.phone}
            />
          </Image>
        ),
      },
    }));
  };

  const handleChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };

  const validateValuesAndSubmit = (event) => {
    // const arrayOfVlaues = Object.values(values);
    // const arrayOfKeys = Object.keys(values);
    // let isEmpty = [];

    // arrayOfVlaues.forEach((value, index) => {
    //   if (value === "") isEmpty.push(arrayOfKeys[index]);
    // });

    // if (isEmpty) {
    //   console.log(isEmpty[0]);
    //   console.log(event.target[isEmpty[0]]);
    //   isEmpty.map(input => {
    //     event.target[input].style.backgroundColor = '#FF000008'
    //     event.target[input].style.border = '1px solid #FF0000BA'
    //   })
     
    // }
    isEdit ? handleEditTask(values) : handleCreateNewTask(values);
  };

  useEffect(() => {
    setSelectIsLoading(true);
    getAllMembers().then((data) => {
      setMembers(mapObjectToSelectValues(data));
      setSelectIsLoading(false);
    });
  }, []);

  return (
    <Form onSubmit={validateValuesAndSubmit}>
      <StyledField>
        <label>Title</label>
        <input
          value={values.title}
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />
      </StyledField>
      <StyledField>
        <label>Description</label>
        <TextArea
          value={values.description}
          name="description"
          type="text"
          placeholder="Description"
          onChange={handleChange}
        ></TextArea>
      </StyledField>

      <StyledField>
        <label>Due on</label>
        <input
          value={values.label}
          name="label"
          type="date"
          placeholder="Due on"
          onChange={handleChange}
        />
      </StyledField>
      <StyledField>
        <label>Member</label>
        <Select
          loading={selectIsLoading}
          search
          onChange={(event, result) => handleChange(event, result)}
          value={values.member_id}
          name="member_id"
          placeholder="Select member"
          options={members}
        />
      </StyledField>

      <Button primary type="submit" fluid>
        Submit
      </Button>
    </Form>
  );
}
