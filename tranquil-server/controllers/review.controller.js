import Review from "../models/review.model.js";
import catchAsync from "../utility/catch-sync.js";

export const createReview = catchAsync(async (req, res) => {
  const { review, rating } = req.body;
  const newReview = new Review({
    user: req.user.id,
    room: req.params.id,
    review,
    rating,
  });
  await newReview.save();
  res.status(201).json({
    message: "Review created successfully",
    status: 201,
  });
});

export const getReviews = catchAsync(async (req, res) => {
  const reviews = await Review.find({ room: req.params.id }).populate("user");
  res.status(200).json({
    message: "Reviews fetched successfully",
    status: 200,
    reviews,
  });
});
