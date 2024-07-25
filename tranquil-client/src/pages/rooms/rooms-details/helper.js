import { authAxios } from "../../../config/auth-axios";
export const getRoomInfo = async (roomId) => {
  try {
    const res = await authAxios().get(`/rooms/${roomId}`);
    return res.data.room;
  } catch {
    throw new Error("Error fetching room info");
  }
};
