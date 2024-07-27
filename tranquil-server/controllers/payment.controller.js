import stripe from "stripe";
import dotenv from "dotenv";
import Payment from "../models/payment.model.js";
import Room from "../models/room.model.js";
import catchAsync from "../utility/catch-sync.js";
dotenv.config();
export const createPayment = catchAsync(async (req, res) => {
  const stripe = stripe(process.env.STRIPE_SECRET_KEY);
  const { id } = req.params;
  const room = await Room.findById(id);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: room.price * 100,
    currency: "usd",
  });
  const payment = new Payment({
    room: id,
    user: req.user.id,
    paymentIntentId: paymentIntent.id,
    amount,
    status: "success",
  });
  await payment.save();
  res.status(201).json({
    message: "Payment intent created successfully",
    status: 201,
    clientSecret: paymentIntent.client_secret,
    paymentIntent,
  });
});
