import User from "../models/user.modal.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import catchSync from "../utility/catch-sync.js";
import dotenv from "dotenv";
dotenv.config();

export const register = catchSync(async (req, res) => {
  const { name, email, password, role = "user" } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please fill in all fields",
      status: 400,
    });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "User already exists",
      status: 400,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    name,
    email,
    password: hashedPassword,
    role: [role],
  });
  res
    .status(201)
    .json({ message: "User registered successfully", status: 200 });
});

export const login = catchSync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill in all fields",
      status: 400,
    });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
      status: 400,
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid credentials",
      status: 400,
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    //   path: "/api/v1/auth/refresh",
  });
  user.token = refreshToken;
  await user.save();
  res.status(200).json({ message: "Login successful", token, status: 200 });
});

export const logout = catchSync(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({
      message: "User not found",
      status: 400,
    });
  }
  user.token = "";
  await user.save();
  res.clearCookie("refreshToken");
  res.status(200).json({ message: "Logout successful", status: 200 });
});

export const me = catchSync(async (req, res) => {
  const user = await User.findById(req.user.id).select(
    "-password -token -role -createdAt -updatedAt -canPost"
  );
  if (!user) {
    return res.status(400).json({
      message: "User not found",
      status: 400,
    });
  }
  res.status(200).json({ user, status: 200 });
});

export const refreshToken = catchSync(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie) {
    return res.status(400).json({
      message: "No token found",
      status: 400,
    });
  }
  const token = cookie.refreshToken;
  if (!token) {
    return res.status(400).json({
      message: "No token found",
      status: 400,
    });
  }
  jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid token",
        status: 403,
      });
    }
    const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token: newToken, status: 200 });
  });
});
