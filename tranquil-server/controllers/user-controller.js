import User from "../models/user.modal.js";
import catchSync from "../utility/catch-sync.js";
export const createKYC = catchSync(async (req, res) => {
  const { name, address, phone } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({
      message: "User not found",
      status: 400,
    });
  }
  user.name = name;
  user.address = address;
  user.phone = phone;
  await user.save();
  res.status(200).json({
    message: "KYC verified successfully",
    status: 200,
  });
});

export const verifyKYC = catchSync(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({
      message: "User not found",
      status: 400,
    });
  }
  user.canPost = true;
  await user.save();
  res.status(200).json({
    message: "KYC verified",
    status: 200,
  });
});

export const getUsers = catchSync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    users,
    status: 200,
  });
});

export const deleteUser = catchSync(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(400).json({
      message: "User not found",
      status: 400,
    });
  }
  await user.remove();
  res.status(200).json({
    message: "User deleted successfully",
    status: 200,
  });
});
