import { authAxios } from "../../../config/auth-axios";
export const getUsers = async () => {
  try {
    const res = await authAxios().get("/users");
    return res.data.status === 200 ? res.data.users : [];
  } catch {
    throw new Error("Failed to fetch users");
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await authAxios().delete(`/users/${id}`);
    return res.data.status === 200;
  } catch {
    throw new Error("Failed to delete user");
  }
};

export const verifyKYC = async (user) => {
  try {
    const res = await authAxios().put("users/verify-kyc", { user });
    return res.data.status === 200;
  } catch {
    throw new Error("Failed to verify KYC");
  }
};
