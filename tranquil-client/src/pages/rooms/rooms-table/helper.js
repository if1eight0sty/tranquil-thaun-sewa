import toast from "react-hot-toast";
import { authAxios } from "../../../config/auth-axios";
import { multipartAuthAxios } from "../../../config/multipart-auth-axios";

export const addRoom = async (data) => {
  try {
    const res = await multipartAuthAxios().post("/rooms", data);
    if (res.status === 201) return true;
    else return false;
  } catch {
    toast.error("Error in adding room");
    throw new Error("Error in adding room");
  }
};

export const getRooms = async () => {
  try {
    const res = await authAxios().get("/rooms");
    return res.data.rooms;
  } catch {
    toast.error("Error in fetching rooms");
    throw new Error("Error in fetching rooms");
  }
};

export const deleteRoom = async (id) => {
  try {
    const res = await authAxios().delete(`/rooms/${id}`);
    if (res.status === 200) return true;
    else return false;
  } catch {
    toast.error("Error in deleting room");
    throw new Error("Error in deleting room");
  }
};

export const updateRoom = async (id, data) => {
  try {
    const res = await multipartAuthAxios().put(`/rooms/${id}`, data);
    if (res.status === 200) return true;
    else return false;
  } catch {
    toast.error("Error in updating room");
    throw new Error("Error in updating room");
  }
};
