import { authAxios } from "../../config/auth-axios";

export const getLatestUsers = async () => {
  try {
    const response = await authAxios().get("users/latest");

    return response.data.status === 200 ? response.data.users : [];
  } catch {
    throw new Error("Error while fetching latest users");
  }
};
export const getLatestRooms = async () => {
  try {
    const response = await authAxios().get("rooms/latest");

    return response.data.status === 200 ? response.data.rooms : [];
  } catch {
    throw new Error("Error while fetching latest rooms");
  }
};

export const getRoomCount = async () => {
  try {
    const response = await authAxios().get("rooms/count");
    return response.data.status === 200 ? response.data.rooms : 0;
  } catch {
    throw new Error("Error while fetching room count");
  }
};
export const getUserCount = async () => {
  try {
    const response = await authAxios().get("users/count");
    return response.data.status === 200 ? response.data.users : 0;
  } catch {
    throw new Error("Error while fetching room count");
  }
};
