import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email is already taken"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    canPost: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    hasKyc: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
    },
    role: {
      type: [String],
      default: "user",
      enum: ["user", "seller", "admin"],
    },
    token: {
      type: String,
    },
    rooms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Room",
      },
    ],
    payments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Payment",
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

export default model("User", userSchema);
