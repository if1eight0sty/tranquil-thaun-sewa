import { authAxios } from "../../config/auth-axios";
export const getUserProfile = async () => {
  try {
    const response = await authAxios().get("auth/me");
    localStorage.setItem("user", JSON.stringify(response.data?.user));
    return response.data;
  } catch {
    throw new Error("Failed to get user profile");
  }
};
