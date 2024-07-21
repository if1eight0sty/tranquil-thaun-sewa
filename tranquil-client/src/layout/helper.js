import { authAxios } from "../config/auth-axios";

export const getUser = async () => {
  try {
    const res = await authAxios().get("auth/me");
    localStorage.setItem("user", JSON.stringify(res.data?.user));
    return res.data;
  } catch (error) {
    throw new Error("User not found.");
  }
};

export const logout = async () => {
  try {
    const res = await authAxios().get("auth/logout");
    return res.data;
  } catch (error) {
    throw new Error("Failed to logout.");
  }
};
