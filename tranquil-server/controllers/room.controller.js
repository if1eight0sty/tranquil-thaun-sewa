import Room from "../models/room.model.js";
import User from "../models/user.model.js";
import catchAsync from "../utility/catch-sync.js";
import { SERVER_URL } from "../config/config.js";

export const createRoom = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user?.canPost) {
    return res.status(404).json({
      message: "You are not allowed to post a room",
      status: 404,
    });
  }
  const { title, description, price } = req.body;
  const address = user.address;
  const images =
    req.files?.map((file) => `${SERVER_URL}/${file.filename}`) ?? [];
  const room = new Room({
    title,
    description,
    price,
    address,
    images,
    seller: req.user.id,
  });
  await room.save();
  res.status(201).json({
    message: "Room created successfully",
    status: 201,
    room,
  });
});

export const getRooms = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user.role?.includes("admin")) {
    const rooms = await Room.find().populate("seller");
    return res.status(200).json({
      message: "rooms fetched successfully",
      status: 200,
      rooms,
    });
  }
  const rooms = await Room.find({ seller: req.user.id }).populate("seller");
  res.status(200).json({
    message: "rooms fetched successfully",
    status: 200,
    rooms,
  });
});

export const getAvailableRooms = catchAsync(async (req, res) => {
  const rooms = await Room.find({ status: "available" }).populate("seller");
  res.status(200).json({
    message: "rooms fetched successfully",
    status: 200,
    rooms,
  });
});
export const getRoom = catchAsync(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) {
    return res.status(404).json({
      message: "Room not found",
      status: 400,
    });
  }
  res.status(200).json({
    message: "Room fetched successfully",
    status: 200,
    room,
  });
});
export const getLatestRooms = async (req, res) => {
  const rooms = await Room.find().sort({ createdAt: -1 }).limit(5);
  res.status(200).json({
    message: "Rooms fetched successfully",
    status: 200,
    rooms,
  });
};
export const getFeaturedRooms = async (req, res) => {
  const rooms = await Room.find().sort({ createdAt: -1 }).limit(6);
  res.status(200).json({
    message: "Rooms fetched successfully",
    status: 200,
    rooms,
  });
};
export const updateRoom = catchAsync(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) {
    return res.status(404).json({
      message: "Room not found",
      status: 400,
    });
  }
  const user = await User.findById(req.user.id);

  if (
    room.seller?.toString() !== req.user.id &&
    !user.role?.includes("admin")
  ) {
    return res.status(403).json({
      message: "You are not allowed to update this room",
      status: 403,
    });
  }
  const { title, description, price } = req.body;
  const images =
    req.files?.map((file) => `${SERVER_URL}/${file.filename}`) ?? [];
  room.title = title;
  room.description = description;
  room.price = price;
  room.images = images;
  await room.save();
  res.status(200).json({
    message: "Room updated successfully",
    status: 200,
  });
});

export const deleteRoom = catchAsync(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) {
    return res.status(404).json({
      message: "Room not found",
      status: 400,
    });
  }
  const user = await User.findById(req.user.id);
  if (
    room.seller?.toString() !== req.user.id &&
    !user.role?.includes("admin")
  ) {
    return res.status(403).json({
      message: "You are not allowed to delete this room",
      status: 403,
    });
  }
  await room.deleteOne();
  res.status(200).json({
    message: "Room deleted successfully",
    status: 200,
  });
});
