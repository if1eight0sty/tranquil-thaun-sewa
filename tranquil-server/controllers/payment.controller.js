import stripe from "stripe";
import dotenv from "dotenv";
import Payment from "../models/payment.model.js";
import Booking from "../models/booking.model.js";
import Room from "../models/room.model.js";
import catchAsync from "../utility/catch-sync.js";
import { sendEmail } from "../utility/send-email.js";
dotenv.config();
export const createPayment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { amount, type = "cod", email, phone, months } = req.body;
  const room = await Room.findById(id);
  if (type === "cod") {
    const payment = new Payment({
      room: id,
      user: req.user.id,
      amount,
      status: "success",
      type,
    });
    await payment.save();
    const booking = new Booking({
      payment: payment._id,
      email,
      phone,
      months,
    });
    await booking.save();

    room.status = "booked";
    await room.save();
    await sendEmail(
      email,
      "Room booked successfully",
      `Your payment for room ${room.title} has been successful.`
    );
    await sendEmail(
      process.env.NODE_MAILER_EMAIL,
      "Room booked",
      `Room ${room.name} has been booked by ${email}`
    );
    return res.status(201).json({
      message: "Payment created successfully",
      status: 201,
      payment,
    });
  }
  const stripe = stripe(process.env.STRIPE_SECRET_KEY);
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
  const payment = new Payment({
    room: id,
    user: req.user.id,
    paymentIntentId: paymentIntent.id,
    amount,
    type,
    status: "success",
  });
  await payment.save();
  const booking = new Booking({
    payment: payment._id,
    email,
    phone,
    months,
  });
  await booking.save();

  room.status = "booked";
  await room.save();
  res.status(201).json({
    message: "Payment intent created successfully",
    status: 201,
    clientSecret: paymentIntent.client_secret,
    paymentIntent,
  });
});
