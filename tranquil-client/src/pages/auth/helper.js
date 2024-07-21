import { authAxios } from "../../config/auth-axios";

export const isValidateLoginData = (data) => {
  if (!data.email || !data.password) return false;
  return true;
};

export const loginHelper = async (data) => {
  try {
    const res = await authAxios().post("auth/login", data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw new Error("Login fail.");
  }
};
export const isValidateRegisterData = (data) => {
  if (!data.email || !data.password || !data.name) return false;
  return true;
};
export const registerHelper = async (data) => {
  try {
    const res = await authAxios().post("auth/register", data);
    return res.data;
  } catch (error) {
    throw new Error("Login fail.");
  }
};
