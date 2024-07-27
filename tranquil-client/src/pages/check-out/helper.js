import { authAxios } from "../../config/auth-axios";
export const createPayment = async (id) => {
  try {
    const res = await authAxios.post(`/payments/${id}`);
    return res.data.clientSecret;
  } catch {
    throw new Error("Payment failed");
  }
};
