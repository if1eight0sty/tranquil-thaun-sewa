import { authAxios } from "../../../config/auth-axios";
export const getRoomInfo = async (roomId) => {
  try {
    const res = await authAxios().get(`/rooms/${roomId}`);
    return res.data.room;
  } catch {
    throw new Error("Error fetching room info");
  }
};

export const createReview = async (roomId, review) => {
  try {
    const res = await authAxios().post(`/reviews/${roomId}`, {
      review,
    });
    return res.status === 201 ? true : false;
  } catch {
    throw new Error("Error creating review");
  }
};

export const getReviews = async (roomId) => {
  try {
    const res = await authAxios().get(`/reviews/${roomId}`);
    return res.data.reviews;
  } catch {
    throw new Error("Error fetching reviews");
  }
};
