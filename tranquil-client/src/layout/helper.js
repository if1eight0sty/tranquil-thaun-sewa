import { authAxios } from "../config/auth-axios";

export const getUser = async () => {
  try {
    const res = await authAxios().get("auth/me");
    return res.data;
  } catch (error) {
    throw new Error("User not found.");
  }
};
