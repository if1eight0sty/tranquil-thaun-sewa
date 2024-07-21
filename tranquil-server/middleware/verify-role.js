export const verifyRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({
      message: "Access denied",
      status: 403,
    });
  }
  next();
};
