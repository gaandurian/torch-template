import axios from "axios";

const endpoint = process.env.REACT_APP_API_ENDPOINT;

export const loginWithEmailAndPassword = async values => {
    const ep = `${endpoint}/member/login`
    const payload = { 
        email: values.email,
        password: values.password
     }
    const response = await axios.post(ep, payload);
    return response
}