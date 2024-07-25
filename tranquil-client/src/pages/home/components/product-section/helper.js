import { authAxios } from "../../../../config/auth-axios";
export const getFeaturedRooms = async () => {
  try {
    const res = await authAxios().get("/rooms/featured");
    return res.data.rooms;
  } catch {
    throw new Error("Error fetching featured products");
  }
};
