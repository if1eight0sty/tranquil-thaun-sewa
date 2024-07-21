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
  user.hasKyc = true;
  await user.save();
  res.status(200).json({
    message: "KYC verified successfully",
    status: 200,
  });
});

export const verifyKYC = catchSync(async (req, res) => {
  const { user } = req.body;
  const foundUser = await User.findById(user);
  if (!foundUser) {
    return res.status(400).json({
      message: "User not found",
      status: 400,
    });
  }
  foundUser.canPost = true;
  await foundUser.save();
  res.status(200).json({
    message: "KYC verified",
    status: 200,
  });
});

export const getUsers = catchSync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    users: users.filter((user) => user.role?.[0] !== "admin"),
    status: 200,
  });
});
export const getLatestUsers = catchSync(async (req, res) => {
  const users = await User.find({ canPost: true })
    .sort({ createdAt: -1 })
    .limit(5);
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
