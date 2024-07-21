import User from "../models/user.modal.js";
export const verifyRole = (role) => async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.role?.[0] !== role) {
    return res.status(403).json({
      message: "Access denied",
      status: 403,
    });
  }
  next();
};
