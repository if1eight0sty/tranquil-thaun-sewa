import { authAxios } from "../../../config/auth-axios";
export const getAvailableRooms = async () => {
  try {
    const res = await authAxios().get("rooms/available");
    return res.data.rooms;
  } catch {
    throw new Error("Error in fetching available rooms");
  }
};
