import { loginWithEmailAndPassword } from "./auth-api";
import jwt from "jwt-decode";

export const loginAndStoreTokenInLocalStorage = async (values) => {
  return loginWithEmailAndPassword(values).then((response) => {
    localStorage.setItem("token", response.data.token);
    return response
  });
};

export const getCurrentUser = () => {
  let userToken = localStorage.getItem("token");
  return userToken && jwt(userToken);
};

export const isAuthenticated = () => Boolean(getCurrentUser());
export const isAdmin = () => getCurrentUser().role === 'admin'
export const logout = () => localStorage.removeItem("token");
export const hasRightToEditProfile = (targetProfileId) => getCurrentUser()._id === targetProfileId