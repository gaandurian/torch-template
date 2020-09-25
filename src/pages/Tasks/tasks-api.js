import axios from "axios";

const endpoint = process.env.REACT_APP_API_ENDPOINT;

export const getAllTasks = async () => {
  const ep = `${endpoint}/task/all`;
  const response = await axios.get(ep);
  return response.data;
};

export const getAllTasksAssignedToThisMember = async _id => {
  const ep = `${endpoint}/task/all/${_id}`;
  const response = await axios.get(ep);
  return response.data;
}

export const getOneTaskById = async (id) => {
  const ep = `${endpoint}/task/one/${id}`;
  const response = await axios.get(ep);
  return response.data;
};

export const updateTaskStatus = async (taskId, newStatus) => {
  const ep = `${endpoint}/task/update_content/${taskId}`
  const payload = { state: newStatus }
  const response = await axios.patch(ep, payload);
  console.log(response);
}