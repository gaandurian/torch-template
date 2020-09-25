import axios from "axios";
import { getAllTasks, updateTaskStatus } from '../../Tasks/tasks-api'
const endpoint = process.env.REACT_APP_API_ENDPOINT;

export const createNewTask = async (values) => {
  const ep = `${endpoint}/task/add`;
  const payload = {
    title: values.title,
    description: values.description,
    label: values.label,
    member_id: values.member_id,
  };
  const response = await axios.post(ep, payload);
  return response
};

export const editTask = async (values) => {
  const ep = `${endpoint}/task/update_content/${values._id}`;
  const payload = {
    title: values.title,
    description: values.description,
    label: values.label,
    member_id: values.member_id,
  }
  const response = await axios.patch(ep, payload);
  return response
};

export const deleteTask = async _id => {
  const ep = `${endpoint}/task/delete/${_id}`;
  const response = await axios.delete(ep);
  return response
}

export { getAllTasks, updateTaskStatus }