import { _axios } from "../../config/config";

export const isValidateLoginData = (data) => {
  if (!data.email || !data.password) return false;
  return true;
};

export const loginHelper = async (data) => {
  try {
    const res = await _axios.post("auth/login", data);

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
    const res = await _axios.post("auth/login", data);
    return res;
  } catch (error) {
    throw new Error("Login fail.");
  }
};
