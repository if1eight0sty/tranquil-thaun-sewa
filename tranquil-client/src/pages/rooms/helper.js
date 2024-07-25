import toast from "react-hot-toast";
import { authAxios } from "../../config/auth-axios";

export const getRoom = async (id) => {
  try {
    const res = await authAxios().get(`/rooms/${id}`);
    return res.data.room;
  } catch {
    toast.error("Error in fetching room");
    throw new Error("Error in fetching room");
  }
};
