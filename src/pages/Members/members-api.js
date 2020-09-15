import axios from "axios";

const endpoint = process.env.REACT_APP_API_ENDPOINT;

export const getAllMembers = async () => {
  const ep = `${endpoint}/member/all`;
  const response = await axios.get(ep);
  return response.data;
};

export const getOneMemberById = async (_id) => {
  const ep = `${endpoint}/member/one/${_id}`;
  const response = await axios.get(ep);
  return response.data;
};

export const createNewMember = async (values) => {
  const ep = `${endpoint}/member/add`;
  const payload = {
    phone: values.phone,
    gender: "male",
    birthday: "2020-09-12T14:16:51.084Z",
    level: "2-ING",
    since: "2020",
    firstname: values.firstname,
    lastname: values.lastname,
    password: values.password,
    email: values.email,
    department: values.dept
  };
  const response = await axios.post(ep, payload);
  return response
};

export const editMemberAccount = async (values) => {
  const ep = `${endpoint}/member/update_info/${values._id}`;
  const payload = values.password !== "" ? {
    phone: values.phone,
    gender: values.gender,
    birthday: values.birthday,
    level: values.level,
    since: values.since,
    firstname: values.firstname,
    lastname: values.lastname,
    password: values.password,
    email: values.email,
    department: values.department
  } : {
    phone: values.phone,
    gender: values.gender,
    birthday: values.birthday,
    level: values.level,
    since: values.since,
    firstname: values.firstname,
    lastname: values.lastname,
    email: values.email,
    department: values.department
  }
  const response = await axios.patch(ep, payload);
  return response
};

export const toggleMemberAccount = async id => {
  const ep = `${endpoint}/member/update_account_state`;
  const payload = { id: id }
  const response = await axios.patch(ep, payload);
  return response
}

export const deleteMemberAccount = async _id => {
  const ep = `${endpoint}/member/delete/${_id}`;
  const response = await axios.delete(ep);
  return response
}